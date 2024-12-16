const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// Middleware to check if the request is during working hours (Monday to Friday, 9 AM to 5 PM)
const workingHoursMiddleware = (req, res, next) => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const hour = currentDate.getHours();

  // Check if it's Monday to Friday (1-5) and between 9 AM (9) and 5 PM (17)
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // Continue to the route handler
  } else {
    res.status(403).send('Sorry, our service is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
  }
};

// Apply the middleware globally
app.use(workingHoursMiddleware);

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.render('home');
});

// Services route
app.get('/services', (req, res) => {
  res.render('services');
});

// Contact route
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
