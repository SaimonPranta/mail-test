const nodemailer = require("nodemailer");
const { PORT } = require("./constant");

const transporter = nodemailer.createTransport({
    host: "52.77.226.136", 
    port: PORT, // Use 465
    secure: true, // Set to true for port 465
    auth: {
        user: "symul@micple.com",
        pass: "ysadfswe3r",
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
    },
});

const mailOptions = {
    from: "symul@micple.com",
    to: "symulkabirpranta@gmail.com",
    subject: "Backup Notification",
    text: "This is a backup notification email sent from my custom SMTP server.",
    html: "<b>This is a backup notification email sent from my custom SMTP server.</b>",
};

const mailSend = () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("Error occurred:", error);
        }
        console.log("Email sent:", info.response);
    });
};

transporter.on('error', (err) => {
    console.error('Nodemailer error:', err);
});

// Execute mail send
mailSend();
