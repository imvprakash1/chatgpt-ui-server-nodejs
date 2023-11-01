Migrating GPT-Django project to GPT-Node-Firebase

1. Set up the node server using express
2. Configure the firebase database using the private key generated for NodeSDK on Firebase. Please refer to the firebase <a href="https://github.com/imvprakash1/chatgpt-ui-server-nodejs/blob/main/documentation/firebaseConnection.pdf">documentation</a>.

![Firebase DB](https://github.com/imvprakash1/chatgpt-ui-server-nodejs/blob/main/documentation/images/Firebase_DB_Empty.PNG)

4.  Now let's configure the routes for account component.

            <u>User Registration</u>

![User Registration API](https://github.com/imvprakash1/chatgpt-ui-server-nodejs/blob/main/documentation/images/RegisterUserAPI.PNG)

Endpoint:account/register('POST')
It will take the details like first name, email, password from user input and register an unvarified account for the user. The user password is hashed using the brypt package so that the password is saved in an encrypted form. Post creating the account the user will be sent a email verification link which will verify the account. Please note that the user will not be able to login with an unvarified account.

![User verification mail](https://github.com/imvprakash1/chatgpt-ui-server-nodejs/blob/main/documentation/images/UserEmailVerification.PNG)

        <u>Verify User Email</u>
    Endpoint:account/verify-email('GET')
    It is a simple get request to the endpoint which will update the verfication status to true for the user. Please note that we can pass a secret key as query parameter which will be used to verify authenticity of the request. For now I'm using the email id of the user as the key.
    Using the nodemailer package we need to configure a transporter which will send the email. The configuration for the same is available in .env file.

        <u>User Login</u>

![User Login Without Verification API](https://github.com/imvprakash1/chatgpt-ui-server-nodejs/blob/main/documentation/images/LoginUnvarifiedUserAPI.PNG)

User Login Without Verification

![User Login Post Verification API](https://github.com/imvprakash1/chatgpt-ui-server-nodejs/blob/main/documentation/images/LoginPostVerificationAPI.PNG)

User Login Post Verification

    Endpoint:account/login('POST')
    Once the user has verified their email they can login to the app using their email and password. User password is not stored anywhere but the encrypted hash is used to compare if the provided password is correct using the bcrypt package.

        <u>Resend User Email Verification</u>
    Endpoint:account/resend-email('GET')
    It is a simple get request to the endpoint which will update the verfication status to true for the user by resending the verification mail to the user.

<u><b>How can we update the back end application to allow multiple users to share one chat?</b></u>
--> We can make use of web sockets to allow users to connect to a particular chat using an identifier for the chat so that every update made by a user or the server will be pushed to all the users connected to the chat.

<u><b>Integrating the existing Vue front end code with the nodejs-firebase backed.</b></u>
-->Once developed all the components can work the same way the Django code was working with some updates to how the data is being handled due to NoSQL database and NodeJS. We can make use of JsonWebToken more effieciently in authentication as smoother integration is provided for NodeJS. We can intoduce cors or proxies to handle the URLs for backend.
