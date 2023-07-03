$(document).ready(function() {
    // API request code goes here
    $.ajax({
      url: 'https://dog.ceo/api/breeds/image/random', // Replace with your API endpoint
      method: 'GET', // Specify the HTTP method (GET, POST, etc.)
      success: function(response) {
        // Handle the API response
        $('#dog-image').attr('src',response.message);
      },
      error: function(xhr, status, error) {
        // Handle any errors that occur during the API request
        console.error(status + ': ' + error);
      }
    });
  });
  
function fetchRandomDogImage(){
    var xhrRequest=new XMLHttpRequest();

    xhrRequest.onload=function(){
        var xhrResponse=JSON.parse(xhrRequest.response);
        console.log(xhrResponse.message);
        $('#dog-image').attr('src',xhrResponse.message);
    }
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send();
}

$('#fetch-dog-image').click(fetchRandomDogImage);