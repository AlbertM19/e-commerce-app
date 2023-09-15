require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./app/models')

const app = express();
const corsOptions = {
     origin: 'http://localhost:3000'
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize
     .sync()
     .then(() => console.log(`Database is now sync...`))
     .catch((e) => console.log(`Failed to sync database...`, e))

require('./app/routes/product.routes')(app);

const PORT = parseInt(process.env.PORT, 10);

app.listen(PORT, () => {
     console.log(`Server is listening on port: ${PORT}`)
})