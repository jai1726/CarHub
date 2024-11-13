const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());


app.use('/', (req, res) => {
    console.log("GET request received");
    res.status(200).json({ message: "APi request working" });
});


app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`);
});