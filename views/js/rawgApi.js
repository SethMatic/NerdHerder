var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rawg-video-games-database.p.rapidapi.com/games",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response.results);

	var game = response.results
	var random = game[Math.floor(Math.random() * game.length)];
	var gamePic = random.background_image
	var popGame = random.name
	console.log(random.name)
	console.log(random.background_image)




 function popGames(){
  document.getElementById("title").innerHTML = random.name;
  document.getElementById("gamePic").src = random.background_image;
  }

  popGames();
});