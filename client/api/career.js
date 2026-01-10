const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  // Only allow POST requests*********
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    // For Vercel, parse FormData
    let formData = {};
    if (req.headers["content-type"]?.includes("multipart/form-data")) {
      // Handle multipart form data
      const formidable = require("formidable");
      const form = formidable({ multiples: true });

      const [fields, files] = await form.parse(req);
      formData = {
        name: fields.name?.[0],
        email: fields.email?.[0],
        phone: fields.phone?.[0],
        position: fields.position?.[0],
        experience: fields.experience?.[0],
        message: fields.message?.[0],
        resume: files.resume?.[0],
      };
    } else {
      // Handle JSON data
      formData = req.body;
    }

    const { name, email, phone, position, experience, message, resume } =
      formData;

    // Validate required fields
    if (!name || !email || !position) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and position are required",
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `Career Application: ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Career Application</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Experience:</strong> ${experience || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #28a745;">
              ${
                message
                  ? message.replace(/\n/g, "<br>")
                  : "No additional message"
              }
            </div>
            ${
              resume
                ? `<p><strong>Resume:</strong> <a href="${resume}">Download Resume</a></p>`
                : ""
            }
          </div>
        </div>
      `,
    };
    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (error) {
    console.error("Career application error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit application. Please try again.",
    });
  }
}
