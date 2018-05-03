const TABLES = require('../dbModule/tables-name');

module.exports = (connection) => {
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

    return {pictureMetadata};
}