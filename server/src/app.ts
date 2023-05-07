import express from 'express' //1
import mongoose from 'mongoose'; //2
import cors from 'cors'; //2
import routes from './routes'

const app = express() //1
const PORT = 8080 //1

const { //2
    MONGODB_ATLAS_USERNAME,
    MONGODB_ATLAS_PASSWORD,
    MONGODB_ATLAS_DBNAME
} = process.env
const uri = `mongodb://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@ac-xpks8gc-shard-00-00.gjtlgy9.mongodb.net:27017,ac-xpks8gc-shard-00-01.gjtlgy9.mongodb.net:27017,ac-xpks8gc-shard-00-02.gjtlgy9.mongodb.net:27017/${MONGODB_ATLAS_DBNAME}?ssl=true&replicaSet=atlas-wx7pkm-shard-0&authSource=admin&retryWrites=true&w=majority` //2

const options = { useNewUrlParser: true, useUnifiedTopology: true } //2
app.use(cors()) // supaya server dapat diakses tanpa ada halangan dari cors policy //2
app.use(routes)

//connect ke mongoose
mongoose.set('useFindAndModify', true) //2
mongoose.connect(uri, options) //2
    .then(() => { //2
        app.listen(PORT, ()=> { //1
            console.info(`App is listening at http://localhost:${PORT}`)
        })
        
    })
    .catch((error) => { //2
        throw error
    })


