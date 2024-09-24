const nodemailer = require("nodemailer");
const { PORT } = require("./constant"); // Ensure PORT is set to 587

// Create a transporter with DKIM signing
const transporter = nodemailer.createTransport({
    host: "mailserver.micple.com", // Your SMTP server IP 
    port: PORT, // Use 587 for STARTTLS
    secure: false, // Set to false for port 587
    auth: {
        user: "symul@micple.com", // Your email address
        pass: "ysadfswe3r", // Your email password
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
    },
});

// Email options
const mailOptions = {
    from: "symul@micple.com", // Ensure this is your SMTP server's email
    to: "symulkabirpranta@gmail.com", // Recipient's email
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
