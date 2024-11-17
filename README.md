# CarHub
CarHub is a web application designed to simplify car management. Users can create, view, edit, and delete car listings, and search for cars using various filters. The app includes user authentication to ensure secure access and personal data protection.


## Features

#### User Authentication:
Secure login and signup functionality with JWT-based authentication.
User-specific dashboard to manage car listings.

#### Car Management:
Add, edit, and delete car listings.
Upload multiple images for a car (minimum 1, maximum 10).

#### Search Functionality:
Search for cars using filters like title, company, price range, and color.

#### Dynamic Navigation:
Owner-specific features like editing or deleting cars.
Detailed car view with a responsive image carousel.

### Technolgies Used:
###### Frontend: React.js, Tailwind CSS
###### Backend: Node.js, Express.js
###### Database: MongoDB (with Mongoose for ORM)
###### Authentication: JSON Web Tokens (JWT)
###### Image Storage: Cloudinary
###### Deployment: Vercel

## Installation and Setup
#### Clone the repossitory:
git clone https://github.com/jai1726/CarHub.git
cd CarHub

#### Backend Setup

#### Install Dependencies
```bash
cd backend 
npm install
```

#### Create .env file
```bash
MONGODB_URI=your_mongodb_uri
DB_Name=your_database_name
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### Start the Backend Server
```bash
npm start
```

#### Frontend Setup using Tailwind CSS

#### Install Dependencies
```bash
cd ../frontend
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
In tailwind.config.js, configure the content option to specify where Tailwind should look for content.

```bash
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In the main CSS file (e.g., src/index.css), include the Tailwind directives:
```bash
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```


#### Start the Development Server
```bash
npm start
```

#### Access the App 
Open your browser and go to http://localhost:3000


### API Documentation
The API documentation is available at /api/docs. It provides details on:

Request parameters
Authentication requirements
Response structures


### Contributors
##### Dende Jagadeesh
jagadeeshdende@gmail.com
Linkedin:https://www.linkedin.com/in/jagadeesh-dende-67b625224/
9390386257
