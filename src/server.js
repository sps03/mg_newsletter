const {  sendFavMail } = require('./app'); 
const dotenv = require('dotenv');
dotenv.config();


const emailTemplate = {
  subject: 'Test Subject', 
  body: 'Hello {{Username}}, Your email is {{email}}'
};

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  user: process.env.YOUR_EMAIL_ID,
  pass: process.env.EMAILKEY
};

const recipient = 'whiteotis21@gmail.com';
const data = {
  email: 'user@example.com',
  avatar: 'avatar-url',
  firstName: 'John',
  lastName: 'Doe',
  useFor: 'favCompanyJobSubmission',
  companyName: 'OLA',
  jobTitle: 'Software Engineer Intern',
  jobDescription: 'Proficiency in C++, DSA and OOPS'
};




sendFavMail(emailTemplate, smtpConfig, recipient, data)
  .then(() => console.log('sendFavMail function called successfully'))
  .catch(error => console.error('Error calling sendFavMail function:', error));


