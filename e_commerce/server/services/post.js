const TABLES = require('../dbModule/tables-name');

module.exports = (connection) => {

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

    return {createPosts}
    
}