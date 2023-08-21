# Personal Blog Web App  

A simple Blog web app, with all the main functionality like read edit delete and update.

### Features

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


### Tech Stack
- Frontend: Vite, Typescript, React, Redux, Yup, FormIk, Axios, React-Toastify 
- Backend: Node.js, Express.js, Joi, Bcryptjs, Cookie-parser
- Database: MongoDB, Mongoose
- Authentication: JWT (JSON Web Tokens)
- State Management: Redux Toolkit
- UI Library: Material-UI
- Deployment: Docker Hub


### User Interface (UI)
The UI is implemented using Material-UI, a popular UI library for React applications,
and custom style modules css


### Database Schema
The website uses MongoDB, a popular NoSQL database, for storing comments, blogs and user information. 


### Installation
Follow these steps to integrate the Blog web into your project:

1. Clone the repository:
_**git clone https://github.com/Ahsan2001/personal-blog-app.git**_



### Running Frontend

2. Navigate into the frontend directory:
3. Install frontend dependencies using npm:
   _**npm install**_
4. Running Frontend:
   _**npm run dev**_


### Running Backend

5. Navigate into the Backend directory:
6. Install Backend dependencies using npm:
   _**npm install**_
7. Running Backend : 
   _**npm run dev**_



### Developer

- Name: **Muhammad Ahsan Sabir Shaikh**
- Contact: **+92 3132034514**