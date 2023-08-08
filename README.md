# Coinbase Blog App  

A simple Blog web app, allowing easy integration with your applications.

## Features

- User Authentication 
- Users can create an account with their name, username, email address and password.
- Users can log in with their registered username and password.
- User passwords are securely hashed and stored in the database using bcrypt.
- Authentication is implemented using JWT (JSON Web Tokens) 
- Users can view a list of Blogs and detail page
- Users can comment on any blog
- Users can post a blog with author name, date, title, content, and blog image 
- Image is store in cloudinary platform
- Only Admin Users can Edit and Delete Functionality in blog
- Functionalities are protected by role-based access control (RBAC), ensuring that only authenticated


## Tech Stack
- Frontend: Vite, Typescript, React, Redux, Yup, FormIk, Axios, React-Toastify 
- Backend: Node.js, Express.js, Joi, Bcryptjs, Cookie-parser
- Database: MongoDB, Mongoose
- Authentication: JWT (JSON Web Tokens)
- State Management: Redux Toolkit
- UI Library: Material-UI
- Deployment: Docker Hub


## User Interface (UI)
The UI is implemented using Material-UI, a popular UI library for React applications,
and custom style modules css


## Database Schema
The website uses MongoDB, a popular NoSQL database, for storing comments, blogs and user information. 


## Installation

Follow these steps to integrate the Blog web into your project:

1. Clone the repository:

   git clone https://github.com/Ahsan2001/Coinbase.git



### Running Frontend

2. Navigate into the frontend directory:

   cd Coinbase/frontend

3. Install frontend dependencies using npm:

   npm install

4. Running Frontend 

   npm run dev


### Running Backend

5. Navigate into the Backend directory:

   cd Coinbase/backend

6. Install Backend dependencies using npm:

   npm install

7. Running Backend 

   npm run dev



## Developer

- Name: Muhammad Ahsan Sabir Shaikh
- Contact: +92 3132034514