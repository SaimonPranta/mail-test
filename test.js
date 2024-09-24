const nodemailer = require("nodemailer");
const { PORT } = require("./constant");

// Create a transporter with DKIM signing
const transporter = nodemailer.createTransport({
    host: "52.77.226.136", // Your SMTP server IP 
    port: PORT, // Use 25, 465, or 587 based on your configuration
    secure: false, // Set to true if using port 465
    auth: {
        user: "symul@micple.com", // Your email address
        pass: "ysadfswe3r", // Your email password
    },
    dkim: {
        domainName: "micple.com",
        keySelector: "default",
        privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQDbJf3MtiB+ehEETtKoF91Yn1TPsj4GfQUqFT2PVCu3eZl9oJAG
sTkRR4FfeQD8RAGpxrRUo8PCbPXsr3KQuk8IxoC2d+vnlHos5fjBR3NUUPJZPPMU
K1/I9YsMfUZSJnswS4VPz1okmAsRIksnPsXBo+OTlVfz2n/vPYeGfbQODwIDAQAB
AoGAd5gbEn2N7BfHc5dkhNFJPVTuXs5B5R6TE+01hCOGHAGjTxixoMVUhGaGZsjN
Td37HmDPBqW8bj0yVDFHD05tVDTlSq09aKO6aDyiPcNEIRxD/xBcs0N4t2EpOGpi
fLY8LDuBh7V/4Ot9NbCiUMQ7J4FK2Hs4zkMoS2MYWeKYEXkCQQD3QkHx5YXkrLSX
BYl0+7OYe57VEu4g91rAK26dTpkXLHF1P6ZT9APcCwK/I12FtUzbljEFsqfPvMZh
HLpugCG7AkEA4uVUMBKxpVvna1AquDwOv3wfb6ETkKc92AfxgoXXTbtektUq/uYD
kEWmiuVLxQwMgP5QYwsMo2CzHnUN7u+FvQJABDAVGdm/WM4sCNrJJzgUJKMDX6yA
aAKIgPS7XOK16RSRn2DCmm1pm1J8a2xX6ynU8WsrzWLnQLd7zK1F4xU8fQJANg6p
NiLeDCWPRzP8WZSFdv2dh7z6qlYOF/AcjBpTJ4Pijl0XN0+Zvb+6ZBEpMjMir4Dn
qhEx26LoSfNddHXAiQJAcRARuSlPBjxNjjjwbGMite9vuDLtyEuQKKb54ylDd1mJ
/1/dDss6aJ5wpAem0RY7JwuLHw3qet2fCw1ClNd+Sg==
-----END RSA PRIVATE KEY-----`,
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
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
