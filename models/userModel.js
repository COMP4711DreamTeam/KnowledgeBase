const profileDb = require('../Database/databaseConnection');

exports.findUser = id => {
  //   let sql = `CALL GET_PUBLIC_USER_INFO('${id}')`;
  //   return profileDb.execute(sql);

  let sql = 'Select * from USERS Where id = ' + id;
  return profileDb.execute(sql);
};
