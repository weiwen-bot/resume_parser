'use strict';

const $ = require('jquery');
const express = require('express');
// const session = require('express-session');
const bodyparser = require("body-parser");
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcryptjs')
// const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path')

// // app.use(express.static("dist"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'resume_parser'
});

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM user_table'

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /users')
});

app.get('/users', (req, res) => {
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
});

app.get('/candidates', (req, res) => {
    connection.query('SELECT * FROM candidate_info', (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
});

app.get('/candidate', (req, res) => {
    connection.query('SELECT * FROM candidate_info WHERE resume_id = ?',2, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
});

app.get('/education', (req, res) => {
    
    connection.query("SELECT education_level FROM candidate_info", (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            var arr = Array.from(results, x => x.education_level)
            console.log(arr)
            function foo(arr) {
                var a = [], b = [], prev;
                
                arr.sort();
                for ( var i = 0; i < arr.length; i++ ) {
                    if ( arr[i] !== prev ) {
                        a.push(arr[i]);
                        b.push(1);
                    } else {
                        b[b.length-1]++;
                    }
                    prev = arr[i];
                }
                return [a,b]
            }
            var result = foo(arr)
            return res.json({data: result[1]})   
            // return res.json({data: result[0]})          
        }
    })
})

app.get('/jobrole/experience', (req, res) => {
    
    connection.query("SELECT total_experience FROM candidate_info WHERE job_applied = 'Data Engineer'", (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            var arr = Array.from(results, x => x.total_experience)
            var r = JSON.stringify(arr)
            var newString = r.toString().replace(/"/g, "");
            var newstr = eval(newString)
            return res.send({data: newstr})
        }
    })
})

app.get('/school', (req, res) => {
    
    connection.query("SELECT education_school FROM candidate_info", (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            var arr = Array.from(results, x => x.education_school); 
            function count(arr) { 
                // let arr = results;
                
                // var total = [];
                arr.sort();
                // console.log(arr)
                var current = null;
                var cnt = 0;
                for (var i = 0, j = arr.length; i < j; i++) {
                    if (arr[i] != current) {
                        // console.log(arr)
                        if (cnt > 0) {
                            // total.push(arr[i])
                            var occurence = '{ ' + "name: '" +  current + "' , " + 'y: ' + cnt + ' }';
                            console.log(occurence)
                            // occurence
                        }
                        current = arr[i];
                        cnt = 1;
                    } else {
                        cnt++;
                    }
                } 
                if (cnt > 0) {
                    var occurence1 = '{ ' + "name: '" + current + "' , " + 'y: ' + cnt + ' }';
                    console.log(occurence1)
                    // occurence1
                }

                return [occurence,occurence1]
            }
            var result = count(arr);
            var r = JSON.stringify(result)
            var newString = r.toString().replace(/"/g, "");
            var newstr = eval(newString)
            return res.json({data: newstr})
        }
    })
})

app.get('/jobrole', (req, res) => {
    
    connection.query("SELECT job_applied FROM candidate_info", (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            var arr = Array.from(results, x => x.job_applied)
            console.log(arr)
            function foo(arr) {
                var a = [], b = [], prev;
                
                arr.sort();
                for ( var i = 0; i < arr.length; i++ ) {
                    if ( arr[i] !== prev ) {
                        a.push(arr[i]);
                        b.push(1);
                    } else {
                        b[b.length-1]++;
                    }
                    prev = arr[i];
                }
                return [a,b]
            }
            var result = foo(arr)
            return res.json({data: result[1]})
        } 
    })
})

app.get('/jobrole/candidates', (req, res) => {
    connection.query(`SELECT * FROM candidate_info WHERE job_applied = 'Data Engineer'`, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({data: results})
        }
    })
})

app.get('/experience', (req, res) => {
    connection.query(`SELECT total_experience FROM candidate_info`, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            var arr = Array.from(results, x => x.total_experience)
            var r = JSON.stringify(arr)
            var newString = r.toString().replace(/"/g, "");
            var newstr = eval(newString)
            return res.send({data: newstr})
        }
    })
})

app.get('/wordcloud', (req, res) => {
    connection.query('SELECT total_skills FROM candidate_info', (err, results) => {
        var arr = Array.from(results, x => x.total_skills)
        console.log(arr)
        var r = JSON.stringify(arr)
        var newString = r.toString().replace(/[^\w\s]/gi, " ");
        // if (obj) {
        //     obj.weight += 1;
        // }else {
        //     obj = {
        //         name: word,
        //         weight: 1
        //     };
        //     newString.push(obj);
        // }
        return res.json({data: newString})
    }
    )
})

app.get('/users/login', (req, res) => {
    // const input_email = request.body.email; // username from user input
    const input_password = req.body.password; // password from user input
    const email = req.body.email_user;
    const password = req.body.password;
    const values = [req.body.email_user, req.body.password]
    if (email && password) {
    connection.query(`SELECT * FROM user_table WHERE email_user = ? AND password = ?`, values, function (err, result) {
        if (err) {
            return res.send(err)
        } else {
            console.log(values)
            // If user can be found, result has one record
            if (result.length > 0) {
                if (input_password == result[0].password) {
                    console.log(values)
                    res.send("Success!");
                    return res.redirect('http//localhost:8080/home');
                } else {
                    res.send("Fail!");
                    console.log(values)
                }
            } else { // If user not found, result has no record
                return res.send("Incorrect email or password!");
            }
        }
    });
    } else {
        return res.send('Please enter Username and Password!');
    }
})

app.get('/users/new', (req, res) => {
    const {email_user, password} = req.query;
    connection.query(`INSERT INTO user_table (email_user, password) VALUES('${email_user}', '${password}')`, function (err, results) {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send('Successfully registered')
            
        }
    })
});

app.get('/candidates/:id', (req, res) => {
    const id = [req.params.resume_id];
    connection.query(`SELECT * FROM candidate_info WHERE resume_id = ?`, 1,  (err, rows, fields) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send(rows)
        }
    }) 
})

app.delete('/candidates/:id', (req, res) => {
    const id = [req.params.resume_id];
    connection.query(`DELETE FROM candidate_info WHERE resume_id = ?`, id,  (err, rows, fields) => {
        if(err) {
            return res.send(err)
        } 
        else {
            return res.send('Successfully deleted')
        }
    }) 
})

app.use(express.static(path.join(__dirname, 'dist')));
//Return the index for any other GET request
app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
});

app.listen(4000, () => {
    console.log("Server is running on port: " + 4000)
})