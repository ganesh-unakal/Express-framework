exports.getcontact =(req,res,next) => {
    res.render('contact' , {
        pageTitle: 'contact',
        path : "/contact",
        formCSS:true
    })
}

exports.postMsg= (req,res,next)=>{
    console.log('name and mail', req.body);
    res.render('success',{
        pageTitle: 'success',
        path : '/success',  
    })
}
