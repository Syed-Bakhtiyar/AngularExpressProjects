const USERS_TABLE = 'users';
const POSTS_TABLE = 'posts';
const PICTURES_METADATA_TABLE = 'pictures_metadata_table';
const POSTS_LIKES_TABLE = 'posts_likes_table';
const COMMENTS_TABLE = 'comments_table'

const CREATE_USERS_TABLE = `CREATE TABLE IF NOT EXISTS ${USER_TABLE} 
                           (
                                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                                first_name VARCHAR(40) NOT NULL,
                                last_name VARCHAR(40) NOT NULL,
                                email VARCHAR(100) NOT NULL UNIQUE,
                                password VARCHAR(30) NOT NULL,
                                PRIMARY KEY (id)
                           )`;

const CREATE_POSTS_TABLE = `CREATE TABLE IF NOT EXISTS ${POSTS_TABLE}
                           (
                                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                                user_id MEDIUMINT NOT NULL,
                                post TEXT NOT NULL DEFAULT '',
                                picture_metadata_id MEDIUMINT NOT NULL DEFAULT 0,
                                FOREIGN KEY(user_id) REFERENCES ${USERS_TABLE}(id),
                                FOREIGN KEY(picture_metadata_id) REFERENCES ${PICTURES_METADATA_TABLE}(id)
                           )`;

const CREATE_PICTURES_METADATA_TABLE = `CREATE TABLE IF NOT EXISTS ${PICTURES_METADATA_TABLE}
                           (
                                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                                image_name VARCHAR(30) NOT NULL DEFAULT '',
                                image_path VARCHAR(150) NOT NULL DEFAULT ''
                           )`;

const CREATE_POSTS_LIKES_TABLE = `CREATE TABLE IF NOT EXISTS ${POSTS_LIKES_TABLE}
                           (
                               id MEDIUMINT NOT NULL AUTO_INCREMENT,
                               user_id MEDIUMINT NOT NULL DEFAULT 0,
                               post_id MEDIUMINT NOT NULL DEFAULT 0,
                               isLike VARCHAR(5) NOT NULL DEFAULT 'false'
                               FOREIGN KEY(user_id) REFERENCES ${USERS_TABLE}(id),
                               FOREIGN KEY(post_id) REFERENCES ${POSTS_TABLE}(id)
                           )`;

const CREATE_COMMENTS_TABLE = `CREATE TABLE IF NOT EXISTS ${COMMENTS_TABLE}
                           (
                               id MEDIUMINT NOT NULL AUTO_INCREMENT,
                               user_id MEDIUMINT NOT NULL DEFAULT 0,
                               post_id MEDIUMINT NOT NULL DEFAULT 0,
                               comments TEXT NOT NULL DEFAULT '',
                               picture_metadata_id MEDIUMINT NOT NULL DEFAULT 0,
                               FOREIGN KEY(user_id) REFRENCES ${USERS_TABLE}(id),
                               FOREIGN KEY(post_id) REFERENCES ${POSTS_TABLE}(id),
                               FOREIGN KEY(picture_metadata_id) REFERENCES ${PICTURES_METADATA_TABLE}(id)
                           )`;

module.exports = {
        CREATE_USERS_TABLE,
        CREATE_POSTS_TABLE,
        CREATE_PICTURES_METADATA_TABLE,
        CREATE_POSTS_LIKES_TABLE,
        CREATE_COMMENTS_TABLE
}