// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require('mysql2');
const connection = mysql.createConnection({
 host: process.env.DB_HOST,
 user: process.env.DB_USER,
 password: process.env.DB_PASS,
 database: process.env.DB_DATABASE,
 id:process.env.DB_ID,
});

export default function handler(req, res) {
   const { id } = req.query
   //const { username } = req.query
  // res.json({ok: true,id,username,})
   //res.json({id,id,})
   //res.json({username,username,})

   connection.query(
     'SELECT * FROM tbl_users WHERE id = ?',[id],
     function(err, results, fields) {
       console.log(results); // results contains rows returned by server
       res.status(200).json({user: results});
     }
   );
 
   connection.query(
     'SELECT * FROM `tbl_users`',
     function(err, results) {
       console.log(results);
     }
   );
 }