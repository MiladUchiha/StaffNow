import nodemailer from 'nodemailer';
import { getCurrentUser } from "@/lib/session"
import bcryptjs from 'bcryptjs';

export const sendEmail = async (email, emailType, userId) => {
    
    try {
     const hashedToken = await  bcryptjs.hash(userId.toString(), 10)
     

    } catch (error) {
        throw new Error(error.message);
    }
}