$(window).on('load', function() {
    var currentUser = sessionStorage.getItem('fb_id')
    console.log(currentUser);
    $.get("/api/favorites", function(data) {
      console.log(data);
      var userData = [];
      console.log(data[0].fb_id);
      for (var i = 0; i < data.length; i++) {
        if (data[i].fb_id == currentUser) {
          userData.push(data[i]);
        }
      }
      console.log(userData)
      console.log(userData[0].Beers[0].beer_name)
      // console.log(JSON.parse(data));

  //   var $newRow = $(`<tr><th>${results[i].beer.beer_name}</th><th>${results[i].beer.beer_description}</th><th>${results[i].beer.beer_abv}%</th><th><img src='${results[i].beer.beer_label}'></th><th>${results[i].brewery.brewery_name}</th><<th><button class="btn btn-default"><span class="glyphicon glyphicon-heart"></span></button></th></tr>`);
  // $('#searchResults').append($newRow);
  // }
});
  });
