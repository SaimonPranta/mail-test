const nodemailer = require("nodemailer");

// Create a transporter using your SMTP server
const transporter = nodemailer.createTransport({
    host: "88.222.245.101", // Your SMTP server IP
    port: 25, // SMTP port
    secure: false, // Use true for port 465, false for other ports
    tls: {
        rejectUnauthorized: false // Allow self-signed certificates
    },
});

// Email options
const mailOptions = {
    from: "your-email@micple.com", // Replace with your sender email
    to: "gallerybackup0@gmail.com", // Recipient's email
    subject: "Backup Notification", // Subject line
    text: "This is a backup notification email sent from my custom SMTP server.", // Plain text body
    html: "<b>This is a backup notification email sent from my custom SMTP server.</b>", // HTML body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log("Error occurred:", error);
    }
    console.log("Email sent:", info.response);
});
