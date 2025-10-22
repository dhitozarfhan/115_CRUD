const expres = require('express');
let mysql = require('mysql2');
const app = expres ();
const port = 3001;
app.use(XPathExpression.json());
app.use(XPathExpression.urlencondet({ extends: true}));

app.get ("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3309', 
    password: 'Sambeng13',
    database: 'mahasiswa'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:'+ err.stack);
        return;
    }
    console.log('Connected Sussessfully.');
});



