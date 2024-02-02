'use server';

import prisma from '../lib/prismadb';
import crypto from 'crypto';
import { sendEmail } from '../lib/sendEmail';
import { ResetPasswordEmailTemplate } from '../components/mail/reset-password-email';

export const resetPassword = async (email) => {
    console.log('Resetting password for ' + email);

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if(!user) {
        throw new Error('User not found');
    }

    const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
    const today = new Date();
    const expiryDate = new Date(today.setDate(today.getDate() + 1)); // 24 hours from now

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            resetPasswordToken: resetPasswordToken,
            resetPasswordTokenExpiry: expiryDate
        }
    })

    await sendEmail({
        from: 'Admin <admin@staffnow.se>',
        to: [email],
        subject: 'Reset your password',
        react: ResetPasswordEmailTemplate({email, resetPasswordToken}) 
    });

    return "Mejlet har skickats";
};