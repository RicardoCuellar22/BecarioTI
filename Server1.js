var bodyparser = require('body-parser');
var express = require('express');
var cors = require('cors');
var app = express();

app.set('port', process.env.PORT || 8090);

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))



app.post('/api/sps/helloworld/v1',(req,res)=>{
  console.log(req.body)
  res.status(200).send({message:'El usuario se a registrado correctamente'})
})


app.get('/api/sps/helloworld/v1/', function(req, res){
  res.send({correo:'ricardo.cuellar@hotmail.com',password:'123456'})
});



app.listen(app.get('port'), () => {
    console.log("App running on port " + app.get('port'));
});
