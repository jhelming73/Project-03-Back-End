// Constants
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Controllers

// Option for Heroku port
app.set("port", process.env.PORT || 8080);

// Start the express server
app.listen(app.get("port"), () => {
    console.log(`✅ LISTENING ON PORT: ${app.get("port")} 🌟`);
});
