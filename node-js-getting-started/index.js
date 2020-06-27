const PORT = process.env.PORT || 5000

let express = require("express");

let app = express();

app.use(express.static("public"));
app.use(express.urlencoded())

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	console.log("Received a request for /");

	res.write("This is the root.");
	res.end();
});

app.post("/home", function(req, res) {
  // Controller
  let weight = req.body.weight;
  let select = req.body.select;  
  console.log(weight,select);
  let price = calculateRate(weight, select);
	let params = {totalPrice: price, weight: weight, select: select};

  res.render("home", params);
  res.end()
});


// Model

function calculateRate(weight,select) {
  let weightFinal = weight;
  if(select == "stamped letter"){
    let result = .55;
    result += ((weight - 1) * .15);
    return result;
  }
  else if(select == "metered letter"){
    let result = .50;
    result += ((weight - 1) * .15);
    return result;
  }
  else if(select == "large envelope"){
    let result = 1.00;
    result += ((weight - 1) * .2);
    return result;
  }
  else if(select == "first class package service"){
    if(weight < 5){
      result = 3.80;
      return result;
    }
    else if (weight < 9){
      result = 5.90;
      return result;
    }
    else{
      console.log("You done did messed up");
    }

  }
  else{
    console.log("You done did messed up");
  }
  return;
}


  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));