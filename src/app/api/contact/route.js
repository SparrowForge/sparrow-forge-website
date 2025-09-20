import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, subject, message } = body;

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // app password
      },
    });

    // Email to YOU (site owner)
    const ownerMail = {
      from: `"${fullName}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h3>A New Mail from Sparrow Forge Website</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Confirmation email to USER
    const confirmationMail = {
      from: `"Sparrow Forge" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting us!",
      html: `
        <h3>Hello ${fullName},</h3>
        <p>Thanks for reaching out. We’ve received your message and will get back to you shortly.</p>
        <br/>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>Best regards,<br/>Sparrow Forge Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerMail);
    await transporter.sendMail(confirmationMail);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      { status: 500 }
    );
  }
}
