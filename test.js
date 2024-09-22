const nodemailer = require("nodemailer");

// Create a transporter with DKIM signing
console.log("Hell from mail send page");

const transporter = nodemailer.createTransport({
    host: "52.77.226.136", // Your SMTP server IP
    port: 587, // Port your server is listening on
    secure: false, // Set to true if using port 465
    auth: {
        user: "symul@micple.com", // Your email address
        pass: "ysadfswe3r", // Your email password
    },
    tls: {
        rejectUnauthorized: false // Ignore self-signed certificate
    }
});

// Email options
const mailOptions = {
    from: "symul@micple.com", // Use an email from your micple.com domain
    to: "symulkabirpranta@gmail.com", // Recipient's email
    subject: "Backup Notification 10", // Subject line
    text: "This is a backup notification email sent from my custom SMTP server.", // Plain text body
    html: "<b>This is a backup notification email sent from my custom SMTP server.</b>", // HTML body
};

// Send email
const mailSend = () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("Error occurred:", error);
        }
        console.log("Email sent:", info);
    });
}

mailSend();
