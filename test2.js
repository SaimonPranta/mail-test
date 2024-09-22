const nodemailer = require('nodemailer');

const handleNodeMailer = async (userInfo) => {

    const name = "Symul"
    const email = "gallarybackup0@gmail.com"
    const subject = "mail form local server"
    const message = "HEllo form local server"

// Message Sender Name Processing
    const arrayOfName = name.split(" ");
    const porcessNameArray = []
    for (let index = 0; index < arrayOfName.length; index++) {
        const element = arrayOfName[index];
        const firstWordOfName = element.slice(0, 1).toUpperCase();
        const lastWordsOfName = element.slice(1);
        const arrarOfProcessedName = [firstWordOfName, lastWordsOfName];
        const porcessedName = arrarOfProcessedName.join("");
        porcessNameArray.push(porcessedName);
    }
    const finalProcessName = porcessNameArray.join(" ");

    const mailOptions = {
        from: 'saimonpranta@gmail.com',
        to: email,
        subject: subject,
        html: `<div>
            <div>
                 <p>${message}</p>  
            </div>
                <h3 style="color: blue">Name: ${finalProcessName}</h3>
            </div>
        </div>`
    };

    try {
        if (name && email && subject && message) {
            const transporter = await nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "saimonpranta@gmail.com",
                    pass: "zanmsaanjczduqph",
                }
            });

            const data = await transporter.sendMail(mailOptions)
            return data
        }
    }
    catch (err) {
        console.log("err ==>>", err)
        return err
    }

}

handleNodeMailer()

module.exports = handleNodeMailer 