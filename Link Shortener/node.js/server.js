import express from 'express';// express import
import detect from 'detect-port'; // detect-port import
import cors from 'cors' // cors import
import link_shortner from './database/link_shortener_db.js'; // database import

// user routes import
import userRouter from './routes/userRoutes.js';
import urlRouter from './routes/urlRoutes.js';


/**
 * Script to handle the app port
 */

const DEFAULT_PORT = process.env.PORT || 5000;

//database conection
try {
  await link_shortner.authenticate()
  console.log('Successful connection to database')
} catch (error) {
  console.log(`The conexion error is: ${error} `)
}


detect(DEFAULT_PORT).then(port => {


  const app = express(); // express instance

  app.use(cors()) // use cors 
  app.use(express.json()) // use json

  //user routes 
  app.use('/shortener/users', userRouter);
  // url routes
  app.use('/shortener/urls', urlRouter);




  if (port !== DEFAULT_PORT) {
    console.log(`Port ${DEFAULT_PORT} is in use. Using port ${port} instead.`);
  }

  app.listen(port, () => console.log(`Server running at http://localhost:${port}`));


}).catch(err => {
  console.error(`Error detecting port: ${err.message}`);
});
