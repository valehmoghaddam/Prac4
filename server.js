var express = require("express")
var app = express()

var port = process.env.port || 3000;

//  requiere a component that I jjust created, import to the library 
let dbo = require ('./db/conn');


 app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 


dbo.connect((err) => {

if (err) {
    console.error(err);
    process.exit();
}


});
app.listen(port,()=>{ 
    console.log("App listening to: "+port);

});