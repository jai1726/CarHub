const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const router = require('./routes/User.Routes.js');
const CarRouter = require('./routes/Car.Routes.js');
const DocsRouter = require('./routes/Doc.Routes.js');
const path = require('path');
const fs = require('fs');

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/user", router);
app.use("/api/car",CarRouter);
app.use("/api/docs",DocsRouter);

const docsFilePath = path.join(__dirname, 'docs', 'CarHubApiDocs.json');



app.get('/api/docs', (req, res) => {
    fs.readFile(docsFilePath, 'utf8', (err, data) => {
        if (err) {
          // Handle error: If the file is missing or unreadable
          return res.status(404).json({ message: 'API documentation not found' });
        }
        
        try {
          const jsonData = JSON.parse(data);
          res.json(jsonData);
        } catch (parseError) {
          // Handle JSON parsing error
          return res.status(500).json({ message: 'Error parsing documentation JSON' });
        }
      });
    });
    

// app.use('/', (req, res) => {
//     console.log("GET request received");
//     res.status(200).json({ message: "APi request working" });
// });



app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`);
});