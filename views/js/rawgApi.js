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
	var random2 = game[Math.floor(Math.random() * game.length)];
	var random3 = game[Math.floor(Math.random() * game.length)];
	var gamePic = random.background_image
	var popGame = random.name
	console.log(random.name)
	console.log(random.background_image)

	for (var b = 0; b < 20; b++){
		var display = $("<div class='card col s4'>"); 
		var name = game[b].name;
		
		var image = game[b].background_image;
		var imgaeDiv = $("<div class='card-image'>");

        var imageTag = $("<img>");
		imageTag.attr('src', image);

		var spanDiv = $('<span class="card-title">').text(name);


				
		imgaeDiv.append(imageTag,spanDiv);
		display.append(imgaeDiv);
		// Append display content to index
		$("#gamelist").append(display);
		console.log(image)
	}


 function popGames1(){
  document.getElementById("title1").innerHTML = random.name;
  document.getElementById("gamePic1").src = random.background_image;
  }
function popGames2(){
	document.getElementById("title2").innerHTML = random2.name;
	document.getElementById("gamePic2").src = random2.background_image;
	}
function popGames3(){
	document.getElementById("title3").innerHTML = random3.name;
	document.getElementById("gamePic3").src = random3.background_image;
		}

  popGames1();
  popGames2();
  popGames3();
});


$('#btn_createList').click(function(){
    $('.ul_current').append($('<li>', {
         text: $('#input_listName').val()
    }));
});

$('#btn_wishList').click(function(){
    $('.ul_wish').append($('<li>', {
         text: $('#input_wishName').val()
    }));
});

/////trending world wide

var tsettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rawg-video-games-database.p.rapidapi.com/games?dates=2019-10-10,2020-10-10&ordering=-added",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
	}
}

$.ajax(tsettings).done(function (response) {
	console.log(response.results);

	var trendgame = response.results
	var trending1= trendgame[Math.floor(Math.random() * trendgame.length)];
	var trending2 = trendgame[Math.floor(Math.random() * trendgame.length)];
	var trending3 = trendgame[Math.floor(Math.random() * trendgame.length)];
	var trendingPic = trendgame.background_image
	var trendingTitle = trendgame.name
	console.log(trendgame.name)
	console.log(trendgame.background_image)
		




	function hotGames1(){
		document.getElementById("trend1").innerHTML = trending1.name;
		document.getElementById("trendPic1").src = trending1.background_image;
		}
	  function hotGames2(){
		  document.getElementById("trend2").innerHTML = trending2.name;
		  document.getElementById("trendPic2").src = trending2.background_image;
		  }
	  function hotGames3(){
		  document.getElementById("trend3").innerHTML = trending3.name;
		  document.getElementById("trendPic3").src = trending3.background_image;
	  }

hotGames1();
hotGames2();
hotGames3();
});