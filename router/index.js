const app = module.exports = require("express")();
app.get('/', (req, res) => {
    res.send({msg: 'Server is up and running'});
})

app.use('/authenticateUser').require('./router.js');

app.all('*', (req, res) => {
    res.send(404).send({msg: 'Not Found'});
});