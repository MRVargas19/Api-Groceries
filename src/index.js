import app from './app.js';
import database from './database.js'
app.listen(process.env.PORT,()=>{
  console.log('server on Port' + process.env.PORT);
})