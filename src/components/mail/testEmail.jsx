"use client";
import React from 'react'
import { sendEmail } from '../../lib/sendEmail';
import { EmailTemplate } from './email-template';

const TestEmailButton = () => {

    const handleSubmit = async () => {
        sendEmail({
            from: 'Admin <admin@staffnow.se>',
            to: ["ahmadpourmilad8@gmail.com"],
            subject: 'Test Email',
            // text: 'This is a test email',
            // html: '<h1>This is a test email</h1>'
            react: EmailTemplate({firstName: "John"}) 
        });
    }

  return (
    <button onClick={handleSubmit}>
        Send Test Email
    </button>
  )
}

export default TestEmailButton