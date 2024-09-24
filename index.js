const { SMTPServer } = require("smtp-server");
const { simpleParser } = require("mailparser");
const fs = require("fs");
const { PORT } = require("./constant");

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
        console.log("Connected, session ID: ", session.id);
        cb();
    },
    onMailFrom(address, session, cb) {
        cb();
    },
    onRcptTo(address, session, cb) {
        cb();
    },
    onData(stream, session, callback) {
        simpleParser(stream, (err, parsed) => {
            if (err) {
                console.error("Error parsing email:", err);
                return callback(err);
            }
            console.log("Parsed email:", parsed);
            callback();
        });
    },
});

const options = {
    key: fs.readFileSync("/var/ssl-certificate/private.key"),
    cert: fs.readFileSync("/var/ssl-certificate/certificate.crt"),
};

server.listen(PORT, options, () => {
    console.log(`Mail server is listening on PORT: ${PORT} with SSL/TLS`);
});

server.on('error', (err) => {
    console.error('SMTP Server error:', err);
});
