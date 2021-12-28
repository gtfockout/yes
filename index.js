import mongoose from 'mongoose'
import express from 'express'
import router from './router.js'
import fileUpload from 'express-fileupload'

const PORT = 5000
const DB_URL = 'mongodb+srv://test:test@cluster0.lbors.mongodb.net/test?retryWrites=true&w=majority'

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)
app.use('/api', (req, res) => {
    res.send("Yesss");
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => {
            console.log(`server is started on ${PORT} port`);
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();