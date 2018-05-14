function isAuth(req, res, next){
  if (!req.isAuth()){
     return res.status(403).json(new Error("Not Authorized"))
  }
  return next();
}

module.exports = isAuth;