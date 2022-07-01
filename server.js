const express = require('express');
const cors = require('cors');
const app = express();


const { sequelize } = require('./models')
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use('/client', require('./routes/client.routes'));
app.use('/appeloffres', require('./routes/appelOffre.routes'))
app.use('/marcher', require('./routes/marche.routes'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, async ()=> {
  console.log(`serveur connecter sur le  port ${PORT}.`);
  await sequelize.authenticate()
  console.log('connecter a la base de donnee')
});
