const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const router = require('./routes/User.Routes.js');
const CarRouter = require('./routes/Car.Routes.js');
const DocsRouter = require('./routes/Doc.Routes.js');


dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/user", router);
app.use("/api/car",CarRouter);
app.use("/api/docs",DocsRouter);

    

// app.use('/', (req, res) => {
//     console.log("GET request received");
//     res.status(200).json({ message: "APi request working" });
// });



app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`);
});