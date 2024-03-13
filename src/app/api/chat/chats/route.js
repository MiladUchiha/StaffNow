// app/api/chat/chats/route.js
import prisma from '@/lib/prismadb';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  try {
    const chats = await prisma.missionChat.findMany({
      where: {
        OR: [
          { bemanningsKontoId: userId },
          { bemannasKontoId: userId },
        ],
      },
      include: {
        mission: true,
        bemanningsKonto: true,
        bemannasKonto: true,
      },
    });

    const chatsWithLastMessage = await Promise.all(
      chats.map(async (chat) => {
        const lastMessage = await prisma.message.findFirst({
          where: { chatId: chat.id },
          orderBy: { createdAt: 'desc' },
        });

        return {
          ...chat,
          lastMessage: lastMessage ? lastMessage.content : null,
        };
      })
    );

    return new Response(JSON.stringify(chatsWithLastMessage), { status: 200 });
  } catch (error) {
    console.error('Error fetching chats:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch chats' }), { status: 500 });
  }
}