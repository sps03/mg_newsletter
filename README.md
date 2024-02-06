# Npm-email

// Example of how to call the functions <br />
const { sendFavMail } = require('mg-newsletter'); <br />

const emailTemplate = {<br />
  subject: 'Test Subject',<br />
  body: 'Hello {{Username}}, Your email is {{email}}'<br />
};<br />

const smtpConfig = {<br />
  host: 'smtp.gmail.com',<br />
  port: 587,<br />
  secure: false,<br />
  user: process.env.YOUR_EMAIL_ID,//replace with your ID in env file <br />
  pass: process.env.EMAILKEY // replace with your EmailKEY in env file <br />

 //How to get EMAILKEY <br />
 1.Go to email settings <br />
 2.Complete 2step verification <br />
 3.Then get your App Key <br />

};<br />

const recipient = 'eg2@gmail.com';<br />
const data = {<br />
  email: 'user@example.com',<br />
  avatar: 'avatar-url',<br />
  firstName: 'John',<br />
  lastName: 'Doe',<br />
  useFor: 'favCompanyJobSubmission',<br />
  companyName: 'Example Company',<br />
  jobTitle: 'Software Engineer',<br />
  jobDescription: 'Job Description'<br />
};<br />

sendFavMail(emailTemplate, smtpConfig, recipient, data)<br />
  .then(() => console.log('sendFavMail function called successfully'))<br />
  .catch(error => console.error('Error calling sendFavMail function:', error));<br />

# mg-email
# mg-email
#   m g _ e m a i l  
 