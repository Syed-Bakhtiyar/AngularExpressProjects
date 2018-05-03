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

const createPosts = async (posts, pictureId)=>{
    const query = `INSERT INTO ${TABLES.POSTS_TABLE} (user_id, post, picture_metadata_id) VALUES ('${posts.userId}', '${posts.userPost}', ${pictureId})`;
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, rows)=>{
            if(err){
                reject(err);
            }
            resolve(rows);
        });
    });
}

const pictureMetadata = async (picturesMetadata)=>{
    console.log('picture',pictureMetadata, pictureMetadata.path);
    const query = `INSERT INTO ${TABLES.PICTURES_METADATA_TABLE} (image_name, image_path) VALUES ('${pictureMetadata.name}', '${pictureMetadata.path}')`;
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, rows)=>{
            if(err){
                throw err;
                return;
            }
            resolve(rows.insertId);
        });
    });
}
// user_id MEDIUMINT NOT NULL DEFAULT 0,
// post_id
const postLikes = async (postLikes)=>{
    const query =  `DELETE FROM ${TABLES.POSTS_LIKES_TABLE} WHERE user_id = ${postLikes.userId} AND post_id = ${postLikes.postId}`;
    connection.query(query, (err, result)=>{
        if(!result.affectedRows){
            // responseOfLikes = await createLikes(postLikes);
            return responseOfLikes;
        }
    });
}

const createLikes = async (postLikes)=>{
    const query =  `INSERT INTO ${TABLES.POSTS_LIKES_TABLE} (user_id, post_id) VALUES (${postLikes.userId}, ${postLikes.postId})`;
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, result)=>{
            if(err){
                throw err;
                return
            }
            resolve(result);
        });
    });
}

const postsComment = (comments)=>{
    const query =  `INSERT INTO ${TABLES.COMMENTS_TABLE} (user_id, post_id, comments, picture_metadata_id) VALUES (${comments.userId}, ${comments.postId}, '${comments.comments}', '${comments.pictureMetadata}')`;
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