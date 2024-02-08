// const {  sendFavMail } = require('./app'); 
// const dotenv = require('dotenv');
// dotenv.config();


// const emailTemplate = {
//   subject: 'Test Subject', 
//   body: 'Hello {{Username}}, Your email is {{email}}'
// };

// const smtpConfig = {
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   user: process.env.YOUR_EMAIL_ID,
//   pass: process.env.EMAILKEY
// };

// const recipient = 'whiteotis21@gmail.com';
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




// sendFavMail(emailTemplate, smtpConfig, recipient, data)
//   .then(() => console.log('sendFavMail function called successfully'))
//   .catch(error => console.error('Error calling sendFavMail function:', error));

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

const recipient = 'whiteotis21@gmail.com';

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

// Example usage:
const userData = {
  Username: 'John',
  email: 'user@example.com',
  amount: 100
};

// Call sendEmail function based on the user's requirement
// For signup:
sendEmail('signup', userData)
  .then(() => console.log('Signup email sent'))
  .catch(error => console.error('Error sending signup email:', error));

// For login:
sendEmail('login', userData)
  .then(() => console.log('Login email sent'))
  .catch(error => console.error('Error sending login email:', error));

// For payment successful:
sendEmail('paymentSuccessful', userData)
  .then(() => console.log('Payment successful email sent'))
  .catch(error => console.error('Error sending payment successful email:', error));

