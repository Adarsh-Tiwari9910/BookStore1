 import express from "express"
 import dotenv from "dotenv"
 import mongoose from "mongoose"
 import bookRoute from "./route/book.route.js"
 import userRoute from "./route/user.route.js"
 import cors from "cors"
const app = express()
 
dotenv.config()
const PORT= process.env.PORT||3000
const uri=process.env.MongoURI
app.use(cors())
app.use(express.json())
// mongo
try {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to the mongodb")
} catch (error) {
    console.log("Error: ",error)
}






app.use('/book', bookRoute)
app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
