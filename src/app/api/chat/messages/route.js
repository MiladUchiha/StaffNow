// app/api/chat/messages/route.js
import prisma from '@/lib/prismadb';
import pusher from '@/lib/pusher';

export async function POST(request) {
  const body = await request.json();
  const { chatId, senderId, content, type } = body;

  try {
    const message = await prisma.message.create({
      data: {
        content,
        ...(type === 'uppdragGivare'
          ? { senderBemannasKonto: { connect: { id: senderId } } }
          : { senderBemanningsKonto: { connect: { id: senderId } } }),
        chat: { connect: { id: chatId } },
      },
      include: {
        senderBemanningsKonto: true,
        senderBemannasKonto: true,
      },
    });

    const sender =
      type === 'uppdragGivare'
        ? message.senderBemannasKonto
        : message.senderBemanningsKonto;

    const messageData = {
      ...message,
      sender: {
        id: sender.id,
        name: sender.name,
        image: sender.image,
      },
    };

    await pusher.trigger(`chat-${chatId}`, 'new-message', messageData);

    return new Response(JSON.stringify(message), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending message:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}