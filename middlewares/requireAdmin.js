module.exports = (req, res, next)=>{
    if(!req.user.isAdmin){
        return res.status({error: 'This action is only for the admin'});
    }

    next();
}