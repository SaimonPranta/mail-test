const SMTPServer = require("smtp-server").SMTPServer;
const { simpleParser } = require("mailparser");

const server = new SMTPServer({
    allowInsecureAuth: true,
    authOptional: true,
    onConnect(session, cb) {
        console.log("From onConnect method, and session ID: ", session.id);
        cb();
    },
    onMailFrom(address, session, cb) {
        console.log(`From onMailFrom method, mail address is address: ${address.address}, and session ID: ${session.id}`);
        // Example: reject if sender is not from a specific domain
        if (!address.address.endsWith('@micple.com')) {
            return cb(new Error('Unauthorized sender'));
        }
        cb();
    },
    onRcptTo(address, session, cb) {
        console.log(`From onRcptTo method, mail address is address: ${address.address}, and session ID: ${session.id}`);
        // Example: reject if recipient is not allowed
        if (!address.address.endsWith('@gmail.com')) {
            return cb(new Error('Unauthorized recipient'));
        }
        cb();
    },
    onData(stream, session, callback) {
        simpleParser(stream, (err, parsed) => {
            if (err) {
                console.error("Error parsing email:", err);
                return callback(err);
            }
            console.log("From onData method, parsed email:", parsed);
            // Additional logging
            console.log(`Email from ${parsed.from.text} to ${parsed.to.text} with subject "${parsed.subject}"`);
            callback();
        });
    },
});





server.listen(587, () => {
    setTimeout(() => {
        require("./test")
    }, 10000);
    console.log("Mail server is listen on PORT: 587")

})