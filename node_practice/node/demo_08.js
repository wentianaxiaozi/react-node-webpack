const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '123.206.18.245',
    user: 'test_cjwech_user',
    password: 'test_cjwech_pwd',
    database: 'test_asa_db'
})

connection.connect(function(err) {
    if (err) {
      console.error('连接失败: ' + err.stack);
      return;
    }
    connection.query('SELECT * FROM shrio_user', (err, results, fields)=>{
        console.log(results)
    })
    console.log('连接成功 id ' + connection.threadId);
  });