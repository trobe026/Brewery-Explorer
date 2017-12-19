$( window ).on('load', function() {

  $('#api').on("click", function() {
    $('#infoColumn').html('');
    console.log("test");
    var input = $('#userInput').val();
    // var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=jsonpcallback&tagmode=all&tags=' + locationName;

    $.ajax({
      url: url,
      method: "GET",
      dataType: 'jsonp'
    })
    .done(function(response) {
        console.log(response);
      })
    .fail(function(error) {
      console.log(error);
    })
  });

});

function jsonpcallback(response) {
  $('#infoColumn').html('')
  for (var i = 0; i < 6; i++) {
    $('#infoColumn').append("<img src=" + response.items[i].media.m + ">");
  }
}