const SMTPServer = require("smtp-server").SMTPServer;
const { simpleParser } = require("mailparser");
// require("./test2")

const server = new SMTPServer({
    allowInsecureAuth: true,
    authOptional: true,
    onConnect(session, cb) {
        console.log("From onConnect method, and session ID: ", session.id)
        cb()
    },
    onMailFrom(address, session, cb) {
        console.log(`From onMailFrom method, mail address is address: ${address.address}, and session ID: ${session.id}`)
        cb()
    },
    onRcptTo(address, session, cb) {
        console.log(`From onRcptTo method, mail address is address: ${address.address}, and session ID: ${session.id}`)
        cb()
    },
    onData(stream, session, callback) {
        simpleParser(stream, (err, parsed) => {
            if (err) {
                console.error("Error parsing email:", err);
                return callback(err);
            }

            console.log("From onData method, parsed email:", parsed);
            // Access headers and body
            // console.log("Subject:", parsed.subject);
            // console.log("From:", parsed.from.text);
            // console.log("To:", parsed.to.text);
            // console.log("Text body:", parsed.text);
            // console.log("HTML body:", parsed.html);

            callback();
        });
    },
})





server.listen(587, () => {
    setTimeout(() => {
        require("./test")
    }, 10000);
    console.log("Mail server is listen on PORT: 587")

})