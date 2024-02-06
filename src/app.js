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

    let subject = '`New Job Submission for Favorite Company`';
    let html = `
    <h1>New Job Submission for Favorite Company</h1>
    <br/>
    A new job submission has been made for your favorite company.
    <br/>
    Company: ${data.companyName}
    <br/>
    Job Title: ${data.jobTitle}
    <br/>
    Job Description: ${data.jobDescription}
  `;

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
