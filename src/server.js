const { sendFavMail } = require('./app'); 
const emailTemplates = require('./emailtemplate')
const dotenv = require('dotenv');
dotenv.config();

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  user: process.env.YOUR_EMAIL_ID,
  pass: process.env.EMAILKEY
};

const recipient = process.env.RECIPIENT; //Give recipents email address here.

// Function to send email based on template and data
async function sendEmail(template, data) {
  const emailTemplate = emailTemplates[template];
  if (!emailTemplate) {
    throw new Error('Invalid email template');
  }

  const mergedBody = emailTemplate.body.replace(/{{([^{}]*)}}/g, (match, key) => {
    return data[key.trim()] || '';
  });

  const emailData = {
    ...data,
    body: mergedBody
  };

  try {
    await sendFavMail(emailTemplate, smtpConfig, recipient, emailData);
    console.log(`Email sent successfully for ${template}`);
  } catch (error) {
    console.error(`Error sending email for ${template}:`, error);
  }
}

// const { sendEmail } = require('mg_newsletter');
// const dotenv = require('dotenv');
// dotenv.config();


// const data = {
//   email: 'user@example.com',
//   avatar: 'avatar-url',
//   firstName: 'John',
//   lastName: 'Doe',
//   useFor: 'favCompanyJobSubmission',
//   companyName: 'OLA',
//   jobTitle: 'Software Engineer Intern',
//   jobDescription: 'Proficiency in C++, DSA and OOPS'
// };
// sendEmail('signup', data)
//   .then (() => console.log("Email Sent"))
//   .catch(error => console.log('Error', error));

  module.exports = {
    sendEmail
  };