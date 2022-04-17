const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() =>
    console.log(
      'Connection established successfully with Database.'
    )
  );
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
