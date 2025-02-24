import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received request body:", body); 

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS,  
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return new Response(JSON.stringify({ success: true, message: "Message sent successfully!" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
