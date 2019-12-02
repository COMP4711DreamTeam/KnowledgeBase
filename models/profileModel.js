const profileDb = require('../Database/databaseConnection');

exports.createUser = user => {
  const sql = `
            CALL CREATE_USER(
                '${user.password}',
                '${user.fname}',
                '${user.lname}',
                '${user.email}',
                '',
                '',
                '',
                ''
            )
        `;
  return profileDb.execute(sql);
};

exports.registerUser = (data, id) => {
  const sql = `
            CALL MODIFY_USER(
                ${id},
                NULL,
                NULL,
                NULL,
                '${data.imgURL}',
                '${data.country}',
                '${data.about}'
            )
        `;
  return profileDb.execute(sql);
};

exports.login = data => {
  const sql = `
            CALL GET_USER_PER_EMAIL_PASSWORD(
                '${data.email}',
                '${data.password}'
            )
        `;
  return profileDb.execute(sql);
};

exports.getUserProfile = user_id => {
  const sql = `SELECT * FROM knowledgebase.users where id = '${user_id}'
        `;
  return profileDb.execute(sql);
};

exports.findUser = id => {
  //   let sql = `CALL GET_PUBLIC_USER_INFO('${id}')`;
  //   return profileDb.execute(sql);

  let sql = 'Select * from USERS Where ID = ' + id;
  return profileDb.execute(sql);
};

exports.fetchLikes = id => {
  let sql = 'Select * from USER_LIKES Where LIKED_USER_ID = ' + id;
  return profileDb.execute(sql);
};

exports.fetchAlreadLiked = (id, sessionId) => {
  let sql =
    'Select * from USER_LIKES Where USER_ID = ' +
    sessionId +
    ' and LIKED_USER_ID = ' +
    id;
  return profileDb.execute(sql);
};

exports.saveLikes = (id, sessionId) => {
  let sql = 'CALL LIKE_USER(' + sessionId + ', ' + id + ')';
  return profileDb.execute(sql);
};
