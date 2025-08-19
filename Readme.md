📚 Book Library API

A structured Node.js and Express-based RESTful API for managing a simple Book Library.
This project currently supports Books and Categories (e.g., Romance, Mystery) with validation powered by Joi. It is designed as a learning project and will expand over time as new features are added.

✨ Features

-Add and manage Books

-Add and manage Categories that reference Books

-Built-in validation with Joi

-Organized project structure for scalability

-RESTful API endpoints

-Example categories: Romance and Mystery

🗂 Project Structure
Node/
├── src/
│ ├── models/ # Database models & schemas
│ ├── routes/ # Route definitions
│ ├── controllers/ # Business logic
│ ├── utils/ # Helper functions
│ └── index.js # Entry point
├── .env # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

⚙️ Installation & Setup

Follow these steps to get started:

1. Clone the repository
   git clone https://github.com/<your-username>/<your-repo-name>.git

2. Navigate into the project folder  
   cd Node

3. Install dependencies  
   npm install

4. Set up environment variables

- Create a .env file in the root folder and add your configuration (e.g., MongoDB URI).
- Example:  
  MONGO_URI=mongodb://127.0.0.1:27017/booklibrary
  PORT=3001

5. Run the server
   npm start
   -Server should now be running at http://localhost:3001 📌 Example

📌 Example Endpoints

1. Books

- GET /books → Fetch all books

- POST /books → Add a new book

2. Categories

- GET /categories → Fetch all categories

- POST /categories → Add a new category (e.g., Romance, Mystery)

🛠️ Technologies Used
-Node.js

-Express.js

-MongoDB (Mongoose)

-Joi (Validation)

-Dotenv

🤝 Contributing

Contributions are welcome.
If you’d like to add a feature or fix a bug, kindly fork the repo and create a pull request.

Steps:
-Fork this repo

-Create your feature branch (git checkout -b feature/YourFeature)

-Commit your changes (git commit -m "Add YourFeature")

-Push to your branch (git push origin feature/YourFeature)

-Open a pull request

📄 License
This project is licensed under the MIT License – you’re free to use, modify, and distribute it.
