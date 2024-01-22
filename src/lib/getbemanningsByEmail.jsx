import prisma from './prismadb';


async function getbemanningsByEmail(email) {
  if (email){
    try {
      const user = await prisma.bemanningsKonto.findUnique({
        where: {
          email : email,
        },
      });
      prisma.$disconnect();
      return user;
    } catch (e) {
      console.error('Error in getbemanningsByEmail:', e);
      throw new Error(`Failed to get user by email: ${email}`); // Throw a new, more specific error
    }
  }else{
    return null
  }
 
}

export default getbemanningsByEmail;
