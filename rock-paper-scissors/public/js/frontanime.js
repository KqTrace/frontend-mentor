$(document).ready(function(){

    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() { 
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }
    
            anHttpRequest.open( "GET", aUrl, true );            
            anHttpRequest.send( null );
        }
    }


$(".circle").click(function(evt){

    var client = new HttpClient();
    client.get('http://localhost:8000?fname=Henry', function(response) {
    // do something with response
    });

    var clickedElement = this;
    
    let behindcolor;
    let elementcolor;
    let reccolor;
    switch(this.id){
        case 'blue': reccolor="#2a45b9"; behindcolor = "#22389c"; elementcolor = "#behindblue"; break;
        case 'yellow': reccolor="#c56b1d"; behindcolor = "#a05717"; elementcolor = "#behindyellow"; break;
        case 'red': reccolor = "#991833"; behindcolor = "#6e1125"; elementcolor = "#behindred"; break;
    }
    
    anime({
        targets: clickedElement,
        easing: 'easeOutExpo',
        scale: {
            value: 0.98
        },
        translateY: 3,
        translateX: 2,
        duration: 300,
        complete: function(anim){
            anime({
                targets: clickedElement,
                easing: 'easeOutExpo',
                scale: 1,
                translateX: 0,
                translateY: 0,
                duration: 400
            })
          }
    });

    anime({
        targets: elementcolor,
        backgroundColor: behindcolor,
        easing: 'easeOutExpo',
        duration: 300,
        complete: function(anim){
            anime({
                targets: elementcolor,
                easing: 'easeOutExpo',
                backgroundColor: reccolor,
                duration: 400
            })
          }
    })
});


});