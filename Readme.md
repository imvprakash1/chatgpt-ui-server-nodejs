Migrating GPT-Django project to GPT-Node-Firebase

1. Set up the node server using express
2. configure the routes and data models for different components-account,chat and chatgpt_ui_server

How can we update the back end application to allow multiple users to share one chat?
--> We can make use of web sockets to allow users to connect to a particular chat using an identifier for the chat so that every update made by a user or the server will be pushed to all the users connected to the chat.
