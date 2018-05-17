module.exports = app => {
  app.use('/api/advicesaccept', require('./api/advice-accept/advice-accept.router'));
  app.use('/api/advicesdecline', require('./api/advice-decline/advice-decline.router'));
  app.use('/api/advicesgarment', require('./api/advice-garment/advice-garment.router'));
  app.use('/api/advicesgroup', require('./api/advice-group/advice-group.router'));  
  app.use('/api/favslists', require('./api/favslist/favslist.router'));
  app.use('/api/meetings', require('./api/meeting/meeting.router'));
  app.use('/api/groups', require('./api/group/group.router'));
  app.use('/api/clothes', require('./api/garment/garment.router'));
  app.use('/api/user', require('./api/user/user.router'));
  app.use('/', require('./home'));
};