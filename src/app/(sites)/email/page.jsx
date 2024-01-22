import React from 'react';
import { sendEmail } from '@/app/api/emails/sendEmail';
import { EmailTemplate } from '@/email-templates/test';

export default function testEmailButton() {
    sendEmail({
        from: 'Admin <admin@staffnow.se>',
        to: ["ahmadpourmilad8@gmail.com"],
        subject: "Welcome to StaffNow!",
        react: EmailTemplate({ firstName: "Maftuna" })
    })
      
  return (
    <button onClick={sendEmail}>Send Emailrtklhkfthkt</button>
  )
}




