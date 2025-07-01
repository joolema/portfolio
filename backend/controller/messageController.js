const nodemailer = require("nodemailer");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, phone, message, interest, country } = req.body;

    const formattedInterest = Array.isArray(interest)
      ? interest.join(", ")
      : interest;

    //  Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      to: process.env.OWNER,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone && `<p><strong>Phone:</strong> ${phone}</p>`}
        <p><strong>Interests:</strong> ${
          formattedInterest || "Not specified"
        }</p>
        ${country && `<p><strong>Country:</strong> ${country}</p>`}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Message Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: error.message,
    });
  }
};
