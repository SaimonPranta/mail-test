const nodemailer = require("nodemailer");

// Create a transporter with DKIM signing
console.log("Hell from mail send page");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Your SMTP server
    port: 465, // Port for secure connection
    secure: true, // Use true for port 465, false for other ports
    auth: {
        user: "saimonpranta@gmail.com",
        pass: "xftc rneh usez bxpb", // Make sure to use a secure method to store your password
    }
});

// Email options
const mailOptions = {
    from: "saimonpranta@gmail.com", // Replace with your sender email
    to: "symulkabirpranta@gmail.com", // Recipient's email
    subject: "Backup Notification new ", // Subject line
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
