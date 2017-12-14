// declaring global variables
var state;
var radius;
var options;
var map;
var markers = [];

var initMap = function() {
    var options = {
        center: { lat: 45.5231, lng: -122.6765 },
        zoom: 8
    };

    var map = new google.maps.Map(
        document.getElementById('map'),
        options
    );
    //Listen for click on map

    google.maps.event.addListener(map, 'click',
        function(event) {
            //add marker on click
            addMarker({ coords: event.latLng });
        });
    // var marker = new google.maps.Marker({
    //  position: {lat:45.5231, lng: -122.6765},
    //    map:map

    // });

    // var infoWindow = new google.maps.InfoWindow({
    //  content: '<h1> Portland, OR </h1>'
    // });

    // marker.addListener('click', function(){
    //  infoWindow.open(map,marker);
    // })


    // //create array of markers
    // var markers = [{
    //         coords: { lat: 45.5231, lng: -122.6765 },
    //         iconImage: '',
    //         content: '<h1>Portland </h1>'
    //     },
    //     {
    //         coords: { lat: 44.9429, lng: -123.0351 },
    //         iconImage: '',
    //         content: '<h1>Salem </h1>'
    //     },
    //     {
    //         coords: { lat: 45.7054, lng: -121.5215 },
    //         iconImage: '',
    //         content: '<h1>Hood River </h1>'
    //     }
    // ];
    //loop through markers
    for (var i = 0; i < markers.length; i++) {
        //add markers
        addMarker(markers[i]);
    };

    // addMarker({
    //  coords:{lat:45.5231, lng: -122.6765},
    //  iconImage: '',
    //  content: '<h1>Portland </h1>'
    // });
    // addMarker({
    //  coords:{lat:44.9429, lng: -123.0351},
    //  iconImage: '',
    //  content: '<h1>Salem </h1>'
    // });
    // addMarker({
    //  coords:{lat:45.7054, lng: -121.5215},
    //  iconImage:'',
    //  content: '<h1>Hood River </h1>'
    // });

    // function addMarker(props) {

    //     var marker = new google.maps.Marker({
    //         position: props.coords,
    //         map: map,
    //         // icon:props.iconImage
    //     });

    //     //Displays Icon Image if available
    //     if (props.iconImage) {
    //         //sets icon image
    //         marker.setIcon(props.iconImage);
    //     };

    //     if (props.content) {
    //         var infoWindow = new google.maps.InfoWindow({
    //             content: props.content
    //         });


    //         marker.addListener('click', function() {
    //             infoWindow.open(map, marker);
    //         });
    //     };
    // };
}

$.ajax({
    "async": true,
    "crossDomain": true,
    "url": "https://developer.nps.gov/api/v1/campgrounds?limit=10%20=&api_key=FnU7EWa9B2RlDnwnu33mMpYJZuWYhXAbYfGxkFh8",
    "method": "GET",
    "headers": {
        "authorization": "Basic Og==",
        "cache-control": "no-cache",
        "postman-token": "509a7a9e-dd99-d214-70d9-793c94ad5033"
    }
}).done(function(response) {

    // var results = response.
    console.log(response);
});


//Search on-click reveals the map and column with information.
$('#submitButton').on('click', function() {
    var state = $('#state').val().trim();
    var radius = $('#radius').val().trim();
    console.log('State: ' + state);
    console.log('Radius: ' + radius);
    initMap(state);




    //create array of markers
    // var markers = [
    //     {
    //     coords:{lat:45.5231, lng: -122.6765},
    //     iconImage: '',
    //     content: '<h1>Portland </h1>'
    //   },
    //     {
    //     coords:{lat:44.9429, lng: -123.0351},
    //     iconImage: '',
    //     content: '<h1>Salem </h1>'
    //   },
    //     {
    //     coords:{lat:45.7054, lng: -121.5215},
    //     iconImage:'',
    //     content: '<h1>Hood River </h1>'
    //   }
    // ];
    //loop through markers
    for (var i = 0; i < markers.length; i++) {
        //add markers
        addMarker(markers[i]);
    };

    // addMarker({
    //  coords:{lat:45.5231, lng: -122.6765},
    //  iconImage: '',
    //  content: '<h1>Portland </h1>'
    // });
    // addMarker({
    //  coords:{lat:44.9429, lng: -123.0351},
    //  iconImage: '',
    //  content: '<h1>Salem </h1>'
    // });
    // addMarker({
    //  coords:{lat:45.7054, lng: -121.5215},
    //  iconImage:'',
    //  content: '<h1>Hood River </h1>'
    // });

    //   function addMarker(props){

    //   var marker = new google.maps.Marker({
    //   position: props.coords,
    // map:map,
    // // icon:props.iconImage
    // });

    //   //Displays Icon Image if available
    // if(props.iconImage){
    //   //sets icon image
    //   marker.setIcon(props.iconImage);
    // }

    // if (props.content) {
    //     var infoWindow = new google.maps.InfoWindow({
    //       content:props.content
    //   });

    //   marker.addListener('click', function(){
    //         infoWindow.open(map,marker);
    //       });
    //   }
    // } 
})




//Search on-click reveals the map and column with information.
$('#submitButton').on('click', function() {
    state = $('#state').val().trim();
    radius = $('#radius').val().trim();


    //Search result gets passed through NPS/Instagram APIs.
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://developer.nps.gov/api/v1/parks?stateCode=" + state + "&limit=10%20=&api_key=FnU7EWa9B2RlDnwnu33mMpYJZuWYhXAbYfGxkFh8",
        "method": "GET",
        "headers": {
            "authorization": "Basic Og==",
            "cache-control": "no-cache",
            "postman-token": "509a7a9e-dd99-d214-70d9-793c94ad5033"
        }
    }
    $.ajax(settings).done(function(response) {
        var results = response.data;
        var latitude
        var longitude
        $.each(results, function(index, value) {
          var latLong = results[index].latLong
          // slice the string to break out latLong into two values
          // function getLatLong(index, value) {
            latitude = latLong.slice(latLong.indexOf(':') + 1, latLong.indexOf(','));
            longitude = latLong.slice(latLong.lastIndexOf(':') +1);
            console.log(latitude);
            console.log(longitude);
          // }
          // add markers from results
            var currentMarker = [{
                    coords: { lat: latitude, lng: longitude},
                    iconImage: '',
                    content: '<h1>Portland </h1>'
                }];

            currentMarker.push(markers)
            console.log(markers)
        })
        console.log(results);
    });


    // Map opens with 10 results (markers) that are based on location. The map is located in the div id "googleMap".
    //Map Options

    //A list version of the results of the google search appear on the left column. The column is named div id "infoColumn".
});