const emailTemplates = {
  signup: {
    subject: 'Welcome to Our Platform',
    body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Platform</title>
      <link rel="stylesheet" href="../global.css"> <!-- Link to global CSS file -->
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Our Platform!</h1>
          </div>
          <div class="content">
            <p>Hello {{Username}},</p>
            <p>Thank you for joining our platform. We're excited to have you!</p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  login: {
    subject: 'Login Notification',
    body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Notification</title>
      <link rel="stylesheet" href="path/to/globalStyles.css"> <!-- Link to global CSS file -->
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Login Notification</h1>
          </div>
          <div class="content">
            <p>Hello {{Username}},</p>
            <p>You have successfully logged in to our platform.</p>
          </div>
        </div>
      </body>
      </html>
    `
  },
  paymentSuccessful: {
    subject: 'Payment Successful',
    body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Successful</title>
      <link rel="stylesheet" href="path/to/globalStyles.css"> <!-- Link to global CSS file -->
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Payment Successful</h1>
          </div>
          <div class="content">
            <p>Hello {{Username}},</p>
            
          </div>
        </div>
      </body>
      </html>
    `
  }
};

module.exports = emailTemplates;
