const db = require("../config/db");



module.exports = {
    getUserByUserEmail:(email,callBack)=>{
        db.query(
            `select * from users where email = ?`,
            [email],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    getUsersModel:(callBack)=>{
        let sql='SELECT users.id AS user_id, profile.profile_name AS name, profile.contact AS phone, users.email AS email,users.password AS password,(SELECT CONCAT( "[", GROUP_CONCAT( JSON_OBJECT( "user_media_id",images.image_id, "user_media_name",images.media_name )), "]" ) FROM images WHERE images.user_id = users.id) AS media_name,(SELECT COUNT(*) FROM users) AS total_count FROM users JOIN profile ON users.id = profile.user_id;'
        db.query(sql,(error,results,field)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results)
        })
    }
}