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

app.get('/api/mahasiswa', (req, res) => {
    db.query('SELECT * FROM biodata', (err, results) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Error fetching mahasiswa');
            return;
        }
        res.json(results);
    });
});

app.post('/api/mahasiswa', (req, res) => {
    const { nama, alamat, agama } = req.body;

    if (!nama || !alamat || !agama) {
        return res.status(400).json({ message : "nama, alamat, agama harus diisi"});
    }


    db.query('INSERT INTO biodata (nama, alamat, agama) VALUES (?, ?, ?)', 
        [nama, alamat, agama],
         (err, results) => {
        if (err) throw err;
        res.status(201).json({ message: 'User Created Successfuly ', id: results.insertId });
    });
});




