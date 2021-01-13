import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.js';

const app=express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use("/users",usersRoutes);

app.get('/',(req,res)=>res.send("Welcome to data server"));

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>console.log(`The connection was successful with post:http://localhost:${PORT}`));