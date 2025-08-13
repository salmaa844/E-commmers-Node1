export function getEmailConfirmationTemplate(code) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Email Confirmation</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f6f8fa;
            padding: 20px;
          }
          .container {
            background-color: #ffffff;
            max-width: 500px;
            margin: auto;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            text-align: center;
          }
          .code {
            font-size: 24px;
            font-weight: bold;
            margin: 20px 0;
            color: #2e7d32;
          }
          .footer {
            font-size: 12px;
            color: #888888;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Confirm Your Email Address</h2>
          <p>Please use the confirmation code below to verify your email:</p>
          <div class="code">${code}</div>
          <p>This code will expire in 10 minutes.</p>
          <div class="footer">
            If you didn’t request this, you can ignore this email.
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getPasswordResetTemplate(code) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Password Reset Code</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f6f8fa;
            padding: 20px;
          }
          .container {
            background-color: #ffffff;
            max-width: 500px;
            margin: auto;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            text-align: center;
          }
          .code {
            font-size: 24px;
            font-weight: bold;
            margin: 20px 0;
            color: #d32f2f;
          }
          .footer {
            font-size: 12px;
            color: #888888;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Password Reset Request</h2>
          <p>Use the code below to reset your password:</p>
          <div class="code">${code}</div>
          <p>This code will expire in 10 minutes.</p>
          <div class="footer">
            If you didn’t request this, please secure your account immediately.
          </div>
        </div>
      </body>
    </html>
  `;
}
export function getBirthdayGreetingTemplate(name) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>عيد ميلاد سعيد!</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #fff8e7;
            padding: 20px;
          }
          .container {
            background-color: #ffffff;
            max-width: 500px;
            margin: auto;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            text-align: center;
          }
          .title {
            font-size: 26px;
            font-weight: bold;
            color: #ff6f61;
          }
          .message {
            font-size: 18px;
            margin: 20px 0;
            color: #333333;
          }
          .cake {
            font-size: 50px;
            margin: 15px 0;
          }
          .footer {
            font-size: 12px;
            color: #888888;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="cake">🎂</div>
          <div class="title">عيد ميلاد سعيد ${name}!</div>
          <p class="message">
            نتمنى لك يوماً مليئاً بالفرح والابتسامات، وأن تتحقق كل أمانيك في هذا العام الجديد من حياتك! 🎉
          </p>
          <div class="footer">
            أصدق الأمنيات من فريقنا ❤️
          </div>
        </div>
      </body>
    </html>
  `;
}
