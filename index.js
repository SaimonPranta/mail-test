const { SMTPServer } = require("smtp-server");
const { simpleParser } = require("mailparser");
const fs = require("fs");
const axios = require("axios")
const { PORT, BACKEND_URL } = require("./src/shared/constants/constant"); // Ensure PORT is defined

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
        simpleParser(stream, async (err, parsed) => {
            try {
                if (err) {
                    console.error("Error parsing email:", err);
                    return callback(err);
                }
                // console.log("Parsed email:", parsed);
                // formData.append("data", parsed)
                const { messageId, from, to, bcc, cc, subject, text, textAsHtml, html, attachments, date } = parsed
                const mailObject = {}

                mailObject["messageId"] = messageId
                mailObject["from"] = from
                mailObject["to"] = to
                mailObject["bcc"] = bcc
                mailObject["cc"] = cc
                mailObject["subject"] = subject
                mailObject["text"] = text
                mailObject["textAsHtml"] = textAsHtml
                mailObject["html"] = html
                mailObject["attachments"] = attachments
                mailObject["date"] = date

                const formData = new FormData()
                formData.append("data", JSON.stringify(parsed))
                if (attachments.length) {
                    attachments.forEach((file, index) => {
                        // {
                        //     type: 'attachment',
                        //     content: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 07 80 00 00 04 38 08 06 00 00 00 e8 d3 c1 43 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 00 04 ... 161801 more bytes>,
                        //     contentType: 'image/png',
                        //     partId: '2',
                        //     release: null,
                        //     contentDisposition: 'attachment',
                        //     filename: 'Screenshot (2).png',
                        //     contentId: '<f_m1hgkwd00>',
                        //     cid: 'f_m1hgkwd00',
                        //     headers: [Map],
                        //     checksum: 'e80862ca4846a72de173193d2df790b9',
                        //     size: 161851
                        //   } 

                        //   to 

                        // {
                        //     name: 'Screenshot (25).png',
                        //     data: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 07 80 00 00 04 38 08 06 00 00 00 e8 d3 c1 43 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00
                        //  00 00 04 ... 150589 more bytes>,
                        //     size: 150639,
                        //     encoding: '7bit',
                        //     tempFilePath: '',
                        //     truncated: false,
                        //     mimetype: 'image/png',
                        //     md5: 'febe1989f42619aae325b7a7cfbc745e',
                        //     mv: [Function: mv]
                        //   }
                        const updateFile = {
                            name: file.filename,
                            data: Buffer.from(file.content, 'base64'),
                            size: file.size,
                            mimetype: file.contentType,
                            encoding: '7bit',
                            tempFilePath: "",
                            truncated: false,
                        };
                        console.log("file", file)
                        console.log("updateFile", updateFile)
                        formData.append(`file-${index + 1}`, updateFile)

                    })
                }

                const { data } = await axios.post(`${BACKEND_URL}/mail/save-mail`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                // console.log("response =>", data)
                console.log("Parsed email:", parsed);



                callback();
            } catch (error) {
                console.log("Error from catch block =>", error)
            }
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
