# Chat App

This repository contains the source code for a simple chat application. The application allows users to communicate with each other in real-time.

## Features

- Real-time messaging: Users can send and receive messages instantly.
- User authentication: Users can sign up and log in securely.
- User profiles: Users can set up profiles with avatars and other details.
- Responsive design: The application is designed to work seamlessly on various devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install` in both the `frontend` and `backend` directories.
4. Set up necessary environment configurations:
   - In the `backend` directory, create a `.env` file and define the following variables:
    
     PORT=3001
     MONGODB_URI=YOUR_MONGODB_URI
     JWT_SECRET=YOUR_JWT_SECRET
     
   - Replace `YOUR_MONGODB_URI` with your MongoDB connection string.
   - Replace `YOUR_JWT_SECRET` with a secret key for JWT token generation.
5. Start the backend server by running `npm start` in the `backend` directory.
6. Start the frontend client by running `npm start` in the `frontend` directory.
7. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Frontend Functionality

The frontend of this chat application is built using React, which allows for dynamic and responsive user interfaces. Here are some key features of the frontend:

- **Component-Based Architecture**: The application is structured into reusable components, making it easy to maintain and scale.
- **State Management**: React's state management allows for efficient handling of user interactions and application data.
- **Socket.io Integration**: The frontend communicates with the backend server using Socket.io to enable real-time messaging.
- **Responsive Design**: The application is designed to provide a seamless user experience across various devices, including desktops, tablets, and mobile phones.

## Backend Functionality

The backend of this chat application is built using Node.js and Express.js, providing a robust and scalable server-side architecture. Here are some key features of the backend:

- **RESTful API Routes**:

  - `/api/auth/signup` (POST): Endpoint for user registration.
    - **Inputs**: `username`, `email`, `password`
    - **Outputs**: `userId`, `username`, `token`

  - `/api/auth/login` (POST): Endpoint for user login.
    - **Inputs**: `email`, `password`
    - **Outputs**: `userId`, `username`, `token`

  - `/api/chat/messages` (GET): Endpoint to fetch all messages.
    - **Outputs**: List of messages with `messageId`, `sender`, `text`, `createdAt`

  - `/api/chat/messages` (POST): Endpoint to send a new message.
    - **Inputs**: `text`
    - **Outputs**: `messageId`, `sender`, `text`, `createdAt`

- **Socket.io Integration**: Socket.io is used to establish a WebSocket connection between the client and server, enabling real-time communication.
- **MongoDB Integration**: MongoDB is used as the database to store user information, messages, and other application data.
- **Authentication Middleware**: Middleware functions are implemented to handle user authentication and authorization securely.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/my-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/my-feature`).
6. Create a new Pull Request.

