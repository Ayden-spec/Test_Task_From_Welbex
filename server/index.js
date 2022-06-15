const config = require('config')
const express = require('express')
const Router = require('./routes/routes')
const app = express();
const PORT = config.get('serverPort')
const cors = require('./routes/cors')

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('', Router)

const start = () => {
    try {
        app.listen(PORT, ()=>{
            console.log('Server startet on port', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}
start()