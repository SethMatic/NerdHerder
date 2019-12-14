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

	for (var b = 0; b < 3; b++){
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

// $("gamesOwned").attr("src", "https://api.rawg.io/api/games?search=" + 

// $("gamesOwned").on("click", function () {
// 	genre.push($(this).attr('title'));
// // $('.games-owned').each(function() {
//     var default_value = this.value;
//     $(this).focus(function() {
//         if(this.value == default_value) {
//             this.value = '';
//         }
//     });
//     $(this).blur(function() {
//         if(this.value == '') {
//             this.value = default_value;
//         }
//     });
// });
// function example_append() {
//     $('#example').append($('#example-textarea').val());
// }

// https://api.rawg.io/api/games?search= user input

// $(document).ready(function(){
//     $("#submitBtn").click(function(){        
//         $("#myForm").submit(); // Submit the form
//     });
// });

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
