import prisma from '@/lib/prismadb';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const chatId = searchParams.get('chatId');

  if (!chatId) {
    return new Response(JSON.stringify({ error: 'Missing chatId parameter' }), {
      status: 400,
    });
  }

  try {
    const messages = await prisma.message.findMany({
      where: { chatId },
      orderBy: { createdAt: 'asc' },
      include: {
        senderBemanningsKonto: true,
        senderBemannasKonto: true,
      },
    });

    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch messages' }), {
      status: 500,
    });
  }
}