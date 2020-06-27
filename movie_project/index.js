const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views')) ;
app.set('view engine', 'ejs');

const { Pool } = require("pg"); 

const connectionString = process.env.DATABASE_URL || "postgres://ta_user:ta_pass@localhost:5432/familyhistory";

const pool = new Pool({connectionString: connectionString});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/getMovies', getMovies);

app.get('/', (req, res)=>res.render("movie"));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



function getMovies(request, response) {}
	

	

	
	

