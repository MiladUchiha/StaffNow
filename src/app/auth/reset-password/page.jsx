import ChangePasswordForm from '../../../components/mail/changePasswordForm';
import ResetPasswordForm from '../../../components/mail/resetPasswordForm';
import prisma from '../../../lib/prismadb';
import React from 'react';



const ResetPasswordPage = async ({ searchParams }) => {
    if (searchParams.token) {
        const user = await prisma.user.findUnique({
            where: {
                resetPasswordToken: searchParams.token,
            },
        });
        if (!user) {
            return <div>Invalid token</div>;
        }

        return <ChangePasswordForm resetPasswordToken={searchParams.token } />;
    } else {
        return <ResetPasswordForm />;
    }
};

export default ResetPasswordPage;