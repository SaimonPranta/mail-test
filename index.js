const { SMTPServer } = require("smtp-server");
const { simpleParser } = require("mailparser");
const fs = require("fs");
const { PORT } = require("./constant"); // Ensure PORT is defined

const server = new SMTPServer({
    allowInsecureAuth: true,
    authOptional: true,
    onAuth(auth, session, callback) {
        const { username, password } = auth;
        if (username === "symul@micple.com" && password === "ysadfswe3r") {
            return callback(null, { user: username });
        } else {
            return callback(new Error('Invalid username or password'));
        }
    },
    onConnect(session, cb) {
        console.log("From onConnect method, session ID: ", session.id);
        cb();
    },
    onMailFrom(address, session, cb) {
        console.log(`From onMailFrom method, mail address: ${address.address}`);
        cb();
    },
    onRcptTo(address, session, cb) {
        console.log(`From onRcptTo method, mail address: ${address.address}`);
        cb();
    },
    onData(stream, session, callback) {
        simpleParser(stream, (err, parsed) => {
            if (err) {
                console.error("Error parsing email:", err);
                return callback(err);
            }
            // console.log("Parsed email:", parsed);
            const {from, bcc, cc} = parsed
            console.log("Parsed from:", from);
            console.log("Parsed from.value:", from?.value);

            console.log("bcc :", bcc);
            console.log("bcc?.value:", bcc?.value);

            console.log("cc :", cc);
            console.log("cc?.value:", cc?.value);
            callback();
        });
    },
});

// SSL/TLS Options
// const options = {
//     key: fs.readFileSync("/var/ssl-certificate/private.key"), // Path to your private key
//     cert: fs.readFileSync("/var/ssl-certificate/certificate.crt"), // Path to your certificate
// };

// server.listen(PORT, options, () => {
//     console.log(`Mail server is listening on PORT: ${PORT} with SSL/TLS`);
// });
server.listen(PORT, () => {
    console.log(`Mail server is listening on PORT: ${PORT} with SSL/TLS`);
});

server.on('error', (err) => {
    console.error('SMTP Server error:', err);
});
