const SMTPServer = require("smtp-server").SMTPServer;
const { simpleParser } = require("mailparser");

const server = new SMTPServer({
    allowInsecureAuth: true,
    authOptional: true, // Set to false if you need authentication to be enforced
    onAuth(auth, session, callback) {
        // Handle authentication here
        const { username, password } = auth;
        if (username === "symul@micple.com" && password === "ysadfswe3r") {
            return callback(null, { user: username });
        } else {
            return callback(new Error('Invalid username or password'));
        }
    },
    onConnect(session, cb) {
        console.log("From onConnect method, and session ID: ", session.id);
        cb();
    },
    onMailFrom(address, session, cb) {
        console.log(`From onMailFrom method, mail address is address: ${address.address}, and session ID: ${session.id}`);
        // if (!address.address.endsWith('@micple.com')) {
        //     return cb(new Error('Unauthorized sender'));
        // }
        cb();
    },
    onRcptTo(address, session, cb) {
        console.log(`From onRcptTo method, mail address is address: ${address.address}, and session ID: ${session.id}`);
        // if (!address.address.endsWith('@gmail.com')) {
        //     return cb(new Error('Unauthorized recipient'));
        // }
        cb();
    },
    onData(stream, session, callback) {
        simpleParser(stream, (err, parsed) => {
            if (err) {
                console.error("Error parsing email:", err);
                return callback(err);
            }
            console.log("From onData method, parsed email:", parsed);
            console.log(`Email from ${parsed.from.text} to ${parsed.to.text} with subject "${parsed.subject}"`);
            callback();
        });
    },
});

server.listen(25, () => {
    // setTimeout(() => {
    //     require("./test");
    // }, 10000);
    console.log("Mail server is listening on PORT: 25");
});
