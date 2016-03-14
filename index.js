var express=require('express')
var path=require('path')
app=express()
alfa=express.Router()
var port=process.env.PORT || 8080

app.use(express.static(__dirname+'/'))

app.get('*',function(req,res) {
	
	res.sendFile(path.join(__dirname+'/home.html'));
}) 

app.use('*',alfa);
app.listen(port);
console.log('Go to port: '+ port)