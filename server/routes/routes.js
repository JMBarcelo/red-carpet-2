module.exports = app => {
  app.use('/api/favslists', require('./api/favslist/favslist.router'));
  //app.use('/api/events', require('./api/meeting/meeting.router'));
  //app.use('/api/notifications', require('./api/notification/notification.router'));
  //app.use('/api/groups', require('./api/group/group.router'));
  app.use('/api/clothes', require('./api/garment/garment.router'));
  app.use('/api/user', require('./api/user/user.router'));
  app.use('/', require('./home'));
  //app.user('/api/clothes', requiere('./api/garment/garment.router'));

};