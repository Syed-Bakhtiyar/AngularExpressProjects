const TABLES = require('../dbModule/tables-name');

module.exports = (connection) => {
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
    
    return {postLikes};
}