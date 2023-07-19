// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
 
  });

 export default function handler(req, res) {

    const { studentid, firstname, lastname, username, password, status } = req.body

  if (req.method==='GET'){
    connection.query(
      'SELECT * FROM `tbl_users`',
      function(err,results){
        res.status(200).json({users: results});
      }
    );

  }else if (req.method==='POST'){
    // res.status(200).json({ firstname,lastname,username,password,status });
    const results= connection.query('INSERT INTO tbl_users SET ?',{
      studentid,
      firstname, 
      lastname,
      username,
      password,
      status,
    });
    return res.status(200).json({...req.body, id: results.insertId});
    
  }else if (req.method==='PUT'){

   try{
    const results = connection.query("UPDATE tbl_users SET ? WHERE id= ? ",[
      req.body,
      req.body.id,
    ]);
    return res.status(200).json({...req.body, id: results.insertId });
  }catch (error) {
      return res.status(500).json({ message : error.message});
    }

  }else {
    try{
      const results = connection.query("DELETE FROM tbl_users WHERE id= ? ",[
        req.query.id
      ]);
      return res.status(200).json({...req.body, id: results.insertId });
    }catch (error) {
        return res.status(500).json({ message : error.message});
      }
  }
 }
// export default function handler(req, res) {
//     res.status(200).json([
//       { id: '026',firstname: 'tanakit', lastname: 'moolang', users: 'tanakit2003moonang@gmail.com' , status: 'Online' },
//       { id: '026',firstname: 'ธนกฤต', lastname: 'มูลอัง', users: 'tanakit2003moonang@gmail.com' , status: 'Online' }
//     ])
//   }
  