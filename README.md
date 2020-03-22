# Project-03-Back-End

# Installation Instructions

1. ``` touch .gitignore ```
```
        # See https://help.github.com/articles/ignoring-files/ for more about ignoring  files.

        # dependencies
        /node_modules
        /.pnp
        .pnp.js

        # testing
        /coverage

        # production
        /build

        # misc
        .DS_Store
        .env.local
        .env.development.local
        .env.test.local
        .env.production.local

        npm-debug.log*
        yarn-debug.log*
        yarn-error.log*
```
2. ``` npm init -y ```
3. ``` npm install express mongoose cors body-parser ```
4. ``` touch index.js ```
```
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
```
5. Edit package.json
```
        "name": "Project-03-Back-End", => "name": "backend",
```