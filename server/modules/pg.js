const config = require('config')
const { Pool } = require('pg')

let pg = exports;

const pool = new Pool({
    user: config.get('pg_user'),
    host: config.get('pg_host'),
    database: config.get('pg_db'),
    password: config.get('pg_pass'),
    port: config.get('pg_port'),
})

pg.executeQuery = function (text, callback) {
    try {
        pool.query(text, (err, res) => {
            if (!err) {
                callback(res, null)
            } else {
                callback(null, err)
                console.log('[ERROR] ' + err.stack)
            }
        })
    }catch(e){
        console.log(e)
    }
}