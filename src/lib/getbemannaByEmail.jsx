import prisma from './prismadb';
async function getbemannByEmail(email) {
  if (email){
    try {
      const user = await prisma.bemannasKonto.findUnique({
        where: {
          email : email,
        },
      });
      prisma.$disconnect();
      return user;
    } catch (e) {
      console.error('Error in getbemannByEmail:', e);
      throw new Error(`Failed to get user by email: ${email}`); // Throw a new, more specific error
    }
  }else{
    return null
  }
 
}

export default getbemannByEmail;
