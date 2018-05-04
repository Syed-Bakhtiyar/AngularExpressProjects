const connection = require('./config');
const schemas = require('./dbSchema');

connection.connect(err => {
    if(err) throw err;

    connection.query(schemas.CREATE_USERS_TABLE,(err, result)=>{
       if(err) throw err;
       console.log('user table created');
    });

    connection.query(schemas.CREATE_PICTURES_METADATA_TABLE, (err, result)=>{
        if(err) throw err;
        console.log('picture table created');    
    });
    
    connection.query(schemas.CREATE_POSTS_TABLE, (err, result)=>{
        if(err) throw err;
        console.log('user table created');    
    });

    connection.query(schemas.CREATE_POSTS_LIKES_TABLE, (err, result)=>{
        if(err) throw err;
        console.log('likes table created');    
    });

    connection.query(schemas.CREATE_COMMENTS_TABLE, (err, result)=>{
        if(err) throw err;
        console.log('comments table created');    
    });

});

module.exports = {
    connection
};