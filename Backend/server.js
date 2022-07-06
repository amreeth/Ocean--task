import express from 'express'
import userRouter from './Routes/users.js'
import bodyparser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
const app=express()
dotenv.config()


app.use(cors())
app.use(bodyparser.json())



//routes
app.use('/api/user',userRouter)



mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology :true
},()=>{
    console.log("DB connected");
})


app.listen(4000,()=>console.log('server running on port 40000'))