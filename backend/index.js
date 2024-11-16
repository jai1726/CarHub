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

app.use(cors(
    {
        // origin:["https://car-hub-frontend-drab.vercel.app/"],
        // methods:["POST","GET","DELETE","PUT"],
        // credentials:true
    }
));
app.use(express.json());
connectDB();

app.use("/api/user", router);
app.use("/api/car",CarRouter);
app.use("/api/docs",DocsRouter);

    

// app.use('/', (req, res) => {
    
//     res.json("hello");
// });



app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`);
});