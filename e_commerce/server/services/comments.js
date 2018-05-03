const TABLES = require('../dbModule/tables-name');

module.exports = (connection) => {
    const postsComment = (comments, pictureId)=>{
        let query =  `INSERT INTO ${TABLES.COMMENTS_TABLE} (user_id, post_id, comments) VALUES (${comments.userId}, ${comments.postId}, '${comments.comments}')`;
        if(pictureId){
            query =  `INSERT INTO ${TABLES.COMMENTS_TABLE} (user_id, post_id, comments, picture_metadata_id) VALUES (${comments.userId}, ${comments.postId}, '${comments.comments}', ${pictureId})`;
        }
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

    return {postsComment}
}    