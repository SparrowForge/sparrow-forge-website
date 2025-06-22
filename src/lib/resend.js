"use server";

import EmailTemplate from '@/app/(commonlayout)/component/shared/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
    const { fullName, email, subject, message } = formData;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: 'info@sprwforge.com',
        subject: `Website Message- ${subject}`,
        reply_to: email,
        react: EmailTemplate({
            fullName,
            email,
            subject,
            message
        }),
    });
};
