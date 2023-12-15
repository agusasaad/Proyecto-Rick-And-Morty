const express = require('express');
const server = express();
const Router = require('./routes/index')
const { conn } = require('./DB_connection')

const PORT = 3001;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
server.use(express.json())
server.use('/rickandmorty', Router)


server.listen(PORT, async () => {
    await conn.sync({force : false})
    try {
        console.log(`server raised in port ${PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})


