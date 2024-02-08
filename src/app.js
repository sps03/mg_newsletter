
const nodemailer = require('nodemailer');

async function sendFavMail(emailTemplate, smtpConfig, recipient, data) {
  try {
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass
      }
    });

    let subject = emailTemplate.subject;
    let html = emailTemplate.body.replace(/{{([^{}]*)}}/g, (match, key) => {
      return data[key.trim()] || '';
    });

    let info = await transporter.sendMail({
      from: '"MetaGeeks" ',
      to: recipient,
      subject: subject,
      html: html
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = {
  sendFavMail, 
};
