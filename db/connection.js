// Constants
const mongoose = require('mongoose');

// Setup for Heroku deployment or local db
let mongoURI = ""
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.MONGODB_URI;
} else {
  mongoURI = "mongodb://localhost/js-grubhub";
}

// Connect to mongoDB
mongoose.connect(mongoURI, 
    {   useNewUrlParser: true
      , useUnifiedTopology: true // https://github.com/Automattic/mongoose/issues/8156
    }
)
.then(instance => console.log(`Connected to db: ${instance.connections[0].name}`)
)
.catch(error => console.error(`Connection to db: ${mongoURI} failed!`, error)
);

module.exports = mongoose;