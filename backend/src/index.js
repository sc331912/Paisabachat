import express from 'express';
const app = express();
app.listen(3000, ()=>console.log('Server is running on port 3000'));

import morgan from "morgan";
app.use(morgan("dev"));
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


import userRouter from "./user/user.routes.js";
app.use("/api/user",userRouter);