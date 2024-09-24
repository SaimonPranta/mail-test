const nodemailer = require("nodemailer");
const { PORT } = require("./constant");

const transporter = nodemailer.createTransport({
    host: "52.77.226.136", // Your SMTP server IP
    port: PORT, // Use 587
    secure: false, // Set to false for port 587 (STARTTLS)
    auth: {
        user: "symul@micple.com", // Your email address
        pass: "ysadfswe3r", // Your email password
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates, if needed
    },
});

// Email options
const mailOptions = {
    from: "symul@micple.com", // Sender email
    to: "symulkabirpranta@gmail.com", // Recipient email
    subject: "Backup Notification", // Subject line
    text: "This is a backup notification email sent from my custom SMTP server.", // Plain text body
    html: "<b>This is a backup notification email sent from my custom SMTP server.</b>", // HTML body
};

// Send email
const mailSend = () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("Error occurred:", error);
        }
        console.log("Email sent:", info.response);
    });
};

// Handle transporter errors
transporter.on('error', (err) => {
    console.error('Nodemailer error:', err);
});

// Execute mail send
mailSend();
