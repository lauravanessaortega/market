const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Configuración de Express y Middleware
app.use(express.json());
app.use(cors());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/supermarket', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Conexión exitosa a la base de datos MongoDB');
}).catch((error) => {
  console.error('Error al conectar a la base de datos MongoDB:', error);
});

// Rutas
app.use('/api', require('./src/routes/articleRoutes'));

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('Bienvenido al sistema de gestión de supermercado');
});

// Inicia el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
