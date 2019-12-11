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
	  console.log(game[0])
	//   console.log(game.background_image)
	//   console.log(game.platforms)
    })
    .catch((error)=>{
      console.log(error)
	})
	
