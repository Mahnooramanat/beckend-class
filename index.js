const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
const app = express();
const port = 8000;
// app.listen(port,() =>{
//     console.log('app is listening on port ${port}');
    
// });
////app.use(express.json());
//app.use(cors()); // This will allow all originsconst 
// const getRoutes = require('./src/routes/getRoutes');
const connectToDatabase = require("./dbConnect")

// Middleware to parse JSON bodies and URL-encoded data
// app.use(express.json());

//app.use(cors()); // This will allow all origins
// Apply routes after middleware
// app.use('/', getRoutes);

//mongoose.set("strictQuery", false);
connectToDatabase();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = app;
// app.use((req,res)=>{
// res.send={
// name:"apple",
// color:"blue",
// };
// });
// app.get('/', (req, res) => {
//     res.send('haniya');
// });
// app.get('/about', (req, res) => {
//     res.send('heyyy!');
// });

