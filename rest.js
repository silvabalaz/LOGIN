const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(3000, () => {

    console.log("Started on Port 3000");

})

router.get('/', (request,response) => {
    response.sendfile("index.html");
});


router.post('/login',(request,response)=>{
    var user_name = request.body.user;
    var password = request.body.password;
    console.log("User name = "+user_name+", password is "+password);
    response.end("yes");
});

app.use("/", router);