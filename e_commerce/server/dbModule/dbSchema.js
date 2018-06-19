const TABLES = require('./tables-name');

const CREATE_USERS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.USERS_TABLE}
                           (
                                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                                first_name VARCHAR(40) NOT NULL,
                                last_name VARCHAR(40) NOT NULL,
                                email VARCHAR(100) NOT NULL UNIQUE,
                                password VARCHAR(100) NOT NULL,
                                PRIMARY KEY (id)
                           )`;

const CREATE_POSTS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.POSTS_TABLE}
                           (
                                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                                user_id MEDIUMINT DEFAULT NULL,
                                post TEXT NOT NULL,
                                picture_metadata_id MEDIUMINT DEFAULT NULL,
                                FOREIGN KEY(user_id) REFERENCES ${TABLES.USERS_TABLE}(id),
                                FOREIGN KEY(picture_metadata_id) REFERENCES ${TABLES.PICTURES_METADATA_TABLE}(id),
                                PRIMARY KEY (id)
                           )`;

const CREATE_PICTURES_METADATA_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.PICTURES_METADATA_TABLE}
                           (
                                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                                image_name VARCHAR(30) NOT NULL DEFAULT '',
                                image_path VARCHAR(150) NOT NULL DEFAULT '',
                                PRIMARY KEY (id)
                           )`;

const CREATE_POSTS_LIKES_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.POSTS_LIKES_TABLE}
                           (
                               id MEDIUMINT NOT NULL AUTO_INCREMENT,
                               user_id MEDIUMINT DEFAULT NULL,
                               post_id MEDIUMINT DEFAULT NULL,
                               isLike VARCHAR(5) NOT NULL DEFAULT 'false',
                               FOREIGN KEY(user_id) REFERENCES ${TABLES.USERS_TABLE}(id),
                               FOREIGN KEY(post_id) REFERENCES ${TABLES.POSTS_TABLE}(id),
                               PRIMARY KEY (id)
                           )`;

const CREATE_COMMENTS_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.COMMENTS_TABLE}
                           (
                               id MEDIUMINT NOT NULL AUTO_INCREMENT,
                               user_id MEDIUMINT DEFAULT NULL,
                               post_id MEDIUMINT DEFAULT NULL,
                               comments TEXT NOT NULL,
                               picture_metadata_id MEDIUMINT DEFAULT NULL,
                               FOREIGN KEY(user_id) REFERENCES ${TABLES.USERS_TABLE}(id),
                               FOREIGN KEY(post_id) REFERENCES ${TABLES.POSTS_TABLE}(id),
                               FOREIGN KEY(picture_metadata_id) REFERENCES ${TABLES.PICTURES_METADATA_TABLE}(id),
                               PRIMARY KEY (id)
                           )`;

module.exports = {
        CREATE_USERS_TABLE,
        CREATE_POSTS_TABLE,
        CREATE_PICTURES_METADATA_TABLE,
        CREATE_POSTS_LIKES_TABLE,
        CREATE_COMMENTS_TABLE
}
