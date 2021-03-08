module.exports = function(app){
    app.get('/',function(req, res){
        res.render('index.html')
    })
    //requests the html file and renders it
    app.post('/submitted', function(req,res){
    console.log(req.body.firstname);
    //takes input and posts to console
})
}
