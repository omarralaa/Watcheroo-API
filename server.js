const express = require('express');
const logger = require('./logger/logger');

const app = express();

// Loading essential configuaration for the API

require('./startup/config');
require('./startup/db');
require('./startup/routes')(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`.yellow.bold);
});
