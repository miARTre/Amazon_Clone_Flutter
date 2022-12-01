// IMPORT FROM PACKAGES
// import 'package:express/express.dart'

const express = require('express');
const mongoose = require("mongoose");

// IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://admin:admin@cluster0.c8pqcy5.mongodb.net/?retryWrites=true&w=majority";

// middleware
// CLIENT -> middleware -> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


// CONNECTIONS
mongoose.connect(DB).then(() => {
    console.log("Connection Successful")
}).catch(e => {
    console.log(e)
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port: ${PORT}`);
})

