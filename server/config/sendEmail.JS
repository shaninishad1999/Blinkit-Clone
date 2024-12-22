import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

// Validate API Key
if (!process.env.RESEND_API) {
    throw new Error("Missing RESEND_API in the .env file. Please provide it.");
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sendTo, subject, html }) => {
    try {
        const response = await resend.emails.send({
            from: 'Binkeyit <noreply@amitprajapati.co.in>',
            to: sendTo,
            subject: subject,
            html: html,
        });

        console.log('Email sent successfully:', response);
        return response;
    } catch (error) {
        console.error('Failed to send email:', error.message);
        throw error; // Propagate the error for further handling if necessary
    }
};

export default sendEmail;
