const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productsRouter = require('./routes/products');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');


app.use(bodyParser.json()); // JSON middleware
app.use('/api/products', productsRouter);

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(logger);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
