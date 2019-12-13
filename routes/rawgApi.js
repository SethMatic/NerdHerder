

const axios = require("axios");



axios({
    "method":"GET",
    "url":"https://rawg-video-games-database.p.rapidapi.com/games",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key":"43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
    }
    })
    .then((response)=>{
		var game = response.data.results
		var random = game[Math.floor(Math.random() * game.length)];
		var gamePic = random.background_image
		var popGame = random.name
		console.log(random.name)
	  console.log(random.background_image)
	//   for (var i = 0; i < game.length; i++) {
	// 	console.log(game[i]);}
	//   console.log(game.background_image)
	//   console.log(game.platforms)
    })
    .catch((error)=>{
      console.log(error)
  })
  
  // function popGames(){
  //   var div = "<div>"
  // document.getElementById("title").innerHTML = random.name;
  // document.getElementById("gamePic").src = random.background_image;
  // }

  // popGames();
  // // $("#gamePic").attr("src", gamePic,popGame)

  
 