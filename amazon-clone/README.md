
Amazon Clone Project
********************
This is a full-stack Amazon clone project built using React for the frontend and Node.js/Express for the backend. The project simulates an e-commerce platform with features like product browsing, user authentication, and a shopping cart.

Table of Contents
*****************
   .Features
   .Technologies Used
   .Setup Instructions
        Frontend
        Backend
   .Folder Structure
   .API Endpoints
   .Screenshots
   .Contributing
   .License

Features
********

Frontend
********
  Product listing with images, price, and ratings
  Search functionality for products
  Product details page
  User authentication (sign-up, login)
  Shopping cart with item count and total
  Checkout functionality

Backend
*******
   REST API for products, user authentication, and cart
   Token-based authentication using firebase
   Database integration with MongoDB  MySQL
   Product management (CRUD operations)

Technologies Used
*****************
Frontend:
*********
    React.js (with Hooks)
    React Router for navigation
    Axios for API requests
    Material-UI for styling
    Firebase for authentication 
    Redux for state management

Folder Structure
****************
amazon-clone/
│
├── frontend/                     # Frontend React app
│   ├── public/                   # Public assets
│   ├── src/  
        ├── Api                       # React source code
│   │   ├── components/           # Reusable UI components (Caroulel,Category,DataProvider,Header,Layout,Loader,ProductDetail,Result)
│   │   ├── pages/                # Different pages (Auth,, Cart, Landing,Orders,Payment,Product)
│   │   ├── Utility/            
             (actiontType,reducer,Firebase)
│   │   ├── App.js                # Main app component
│   │   └── index.js              # App entry point
│   └── package.json              # Frontend dependencies
│
└── backend/                      # Backend Node.js app
    ├── controllers/              # Business logic for routes
    ├── models/                   # Database models (User, Product, Cart)
    ├── routes/                   # API routes (auth, product, cart)
    ├── config/                   # Config files (DB connection, JWT)
    ├── server.js                 # Express server setup
    └── package.json              # Backend dependencies

