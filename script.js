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