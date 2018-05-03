const connection = require('./config');
const TABLES = require('./tables-name');
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

const createUser = (user) => {
    const query = `INSERT INTO ${TABLES.USERS_TABLE} (first_name, last_name, email, password) VALUES ('${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}')`;
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, rows)=>{
            if(err){
                reject(err);
            }
            resolve(rows);
        });
    });
}

const createPosts = (posts, pictureId)=>{
    let query = `INSERT INTO ${TABLES.POSTS_TABLE} (user_id, post) VALUES ('${posts.userId}', '${posts.userPost}')`;
    if(pictureId){
        query = `INSERT INTO ${TABLES.POSTS_TABLE} (user_id, post, picture_metadata_id) VALUES ('${posts.userId}', '${posts.userPost}', ${pictureId})`;
    }
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, rows)=>{
            if(err){
                reject(err);
            }
            resolve(rows);
        });
    });
}

const pictureMetadata = (pictures)=>{
    console.log('picture',pictures, pictures.path);
    const query = `INSERT INTO ${TABLES.PICTURES_METADATA_TABLE} (image_name, image_path) VALUES ('${pictures.name}', '${pictures.path.replace(/\\/g, '/')}')`;
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, rows)=>{
            if(err){
                reject(err);
            }
            resolve(rows.insertId);
        });
    });
}
// user_id MEDIUMINT NOT NULL DEFAULT 0,
// post_id
const postLikes = (postLikes)=>{
    const query =  `DELETE FROM ${TABLES.POSTS_LIKES_TABLE} WHERE user_id = ${postLikes.userId} AND post_id = ${postLikes.postId}`;
    return new Promise((resolve, reject)=>{
        connection.query(query, async (err, result)=>{
            if (err){
                reject(err);
            }
            let responseOfLikes = {};
            if(!result.affectedRows){
                responseOfLikes = await createLikes(postLikes);
            }
            resolve(responseOfLikes);
        });
    })
}

const createLikes = async (postLikes)=>{
    const query =  `INSERT INTO ${TABLES.POSTS_LIKES_TABLE} (user_id, post_id, isLike) VALUES (${postLikes.userId}, ${postLikes.postId}, 'true')`;
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}

const postsComment = (comments, pictureId)=>{
    let query =  `INSERT INTO ${TABLES.COMMENTS_TABLE} (user_id, post_id, comments) VALUES (${comments.userId}, ${comments.postId}, '${comments.comments}')`;
    if(pictureId){
        query =  `INSERT INTO ${TABLES.COMMENTS_TABLE} (user_id, post_id, comments, picture_metadata_id) VALUES (${comments.userId}, ${comments.postId}, '${comments.comments}', ${pictureId})`;
    }
    new Promise((resolve, reject)=>{
        connection.query(query, (err, result)=>{
            if(err){
                throw err;
                return
            }
            resolve(result);
        });
    });
}

module.exports = {
    createUser,
    createPosts,
    postLikes,
    postsComment,
    pictureMetadata
};