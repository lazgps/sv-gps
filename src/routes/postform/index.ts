import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const mailuser :string = process.env['EMAIL_USER'] as string;
const mailpass :string = process.env['EMAIL_PASS'] as string;

export async function post(req) {
    
    let formtype = req.body.form;
    let valueArray = [];

    if (formtype === 'owner'){
        formtype = 'owner form submission';
        valueArray.push(req.body.firstname);
        valueArray.push(req.body.lastname);
        valueArray.push(req.body.email);
        valueArray.push(req.body.phone);
        valueArray.push(req.body.numprops);
        valueArray.push(req.body.goals);
    } else if (formtype === 'realtor') {
        formtype = 'realtor form submission'
        valueArray.push(req.body.broker);
        valueArray.push(req.body.realtor);
        valueArray.push(req.body.email);
        valueArray.push(req.body.phone);
        valueArray.push(req.body.comments);
    } else {
        console.log('Unknown form');
    };
  
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: mailuser,
            pass: mailpass,
        },
    });

    let info = await transporter.sendMail({
        from: mailuser,
        to: 'info@gps-realestate.com',
        subject: formtype,
        text: JSON.stringify(valueArray),
    });

    console.log('Message Sent: %s', info.messageId);

    return {body: {msgID: JSON.stringify(info.messageId)}}
}




