import * as React from 'react';



export const VerifyEmailTemplate = ({ email, emailVerificationToken }) => (
    <div>
        <h1>Verifera ditt mejl för <b>{email}</b></h1>
        <p>
            För att verifiera ditt mejl, klicka på denna länk och följ instruktionerna:
        </p>
        <a href={`http://localhost:3000/auth/verify-email?token=${emailVerificationToken}`}>
            Klicka här för att verifiera mejl
        </a>
    </div>
);