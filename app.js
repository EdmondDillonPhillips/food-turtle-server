var express         = require('express'),
    path            = require('path'),
    bodyParser      = require('body-parser'),
    cons            = require('consolidate'),
    {Pool, Client}  = require('pg'),
    app             = express();

// Applicaiton Port
const port = 3000;

//DB Connection
const client = new Client({
    user: 'postgres',
    host: 'foodturtledev1.cev0zecrqmhh.us-east-1.rds.amazonaws.com',
    // database: 'foodturtledev1',
    password: 'foodturtlepostgres5432',
    port: 5432,
    });

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.get('/', function(req, res){
    console.log('TEST');
})

// Server
app.listen(port, ()=>{
    console.log(`Server started on Port ${port}`);
    client.connect((err) => {
        if (err) {
          console.error('connection error', err.stack)
        } else {
          console.log('connected')
        }
      });
});
  
//   client.connect((err) => {
//     if (err) {
//       console.error('connection error', err.stack)
//     } else {
//       console.log('connected')
//     }
//   });
