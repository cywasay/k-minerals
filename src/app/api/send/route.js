import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, requirements, category } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Kohistan Mineral <onboarding@resend.dev>', // Change this to your verified domain once set up
      to: ['sales@kohistanminerals.com'], // The recipient
      subject: `New Inquiry: ${category}`,
      html: `
        <h2>New Inquiry from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Requirements:</strong></p>
        <p>${requirements}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
