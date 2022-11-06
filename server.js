//App
const app = require('./app');

//Port
const PORT = process.env.port || 5005; 

//Server
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
}); 