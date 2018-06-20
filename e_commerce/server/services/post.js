const TABLES = require('../dbModule/tables-name');

module.exports = (connection) => {

    const createPosts = (posts, pictureId)=>{
        let query = `INSERT INTO ${TABLES.POSTS_TABLE} (user_id, post) VALUES ('${posts.user_id}', '${posts.post}')`;
        if(pictureId){
            query = `INSERT INTO ${TABLES.POSTS_TABLE} (user_id, post, picture_metadata_id) VALUES ('${posts.user_id}', '${posts.post}', ${pictureId})`;
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

    const getUsersPost = (userId)=>{
        const query =  `SELECT post.*, pic.*, likes.* FROM ${TABLES.POSTS_TABLE} AS post 
                        LEFT JOIN ${TABLES.PICTURES_METADATA_TABLE} AS pic 
                        ON post.picture_metadata_id = pic.id 
                        LEFT JOIN ${TABLES.POSTS_LIKES_TABLE} AS likes
                        ON post.id = likes.post_id WHERE post.user_id = ${userId} ORDER BY post.id DESC`;
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        });
    }

    return {createPosts, getUsersPost};    
}