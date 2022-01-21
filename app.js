const express = require("express");
const morgan = require("morgan")
const { db, Page, User } = require('./models')

const app = express();


app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));



app.get("/", (req, res, next) => {
    try {
        res.send("IM ALIVEEEEEEE")
    } catch (error) {
        res.status(500).send(`Something went wrong!....${error}`)
    }
})

const PORT = 1337;

const init = async () => {
    await Page.sync();
    await User.sync();
    
    app.listen(PORT, () => {
        db.authenticate()
            .then(() => {
                console.log('connected to the database')
                console.log(`App listening on port ${PORT}`)
            })
    });
}

init();