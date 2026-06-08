# URL Shortener

A simple URL shortener built with Node.js, Express, MongoDB, and EJS.

## Features

- Shorten long URLs instantly
- User authentication (sign up / sign in / logout)
- Track click counts for each shortened URL
- Copy shortened URLs to clipboard
- Responsive design
- Admin panel to view all URLs

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **View Engine:** EJS
- **URL ID Generation:** nanoid

## Installation

1. Clone the repo
   ```bash
   git clone https://github.com/Habib277672/url-shortner.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Make sure MongoDB is running locally on port 27017

4. Start the server
   ```bash
   npm start
   ```

5. Open `http://localhost:8000` in your browser

## Usage

1. Sign up at `/signup`
2. Sign in at `/signin`
3. Paste a long URL and click **Shorten**
4. Copy the shortened URL and share it
5. View all your shortened URLs and their click counts on the home page
