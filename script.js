gsap.to(".circle" , {
    rotate:0,
    ease : Expo.easeInOut,
    duration : 2
})


var active =3;
var mncircles = document.querySelectorAll(".mncircle");
var secs = document.querySelectorAll(".sec");

gsap.to(mncircles[active-1], {
    opacity :.5,
})

gsap.to(secs[active-1] , {
    opacity:1
})

mncircles.forEach(function(val , index){
    swipe (val , index)
})

secs.forEach( function( val ,index) {
    swipe (val , index);
} )

function swipe(val , index){
val.addEventListener("click" , function(){
        // alert("clicked " + index);
        let degree ;

        if(index == 0){ degree = 20}
        else if(index==1){degree = 10}
        else if(index==2){degree = 0}
        else if(index==3){degree = -10}
        else if(index==4){degree = -20}

        gsap.to(".circle" ,{
            ease : Expo.easeInOut,
            duration : 1.5 ,
            rotate : degree,
        })
        
        grayout();
        
        gsap.to(mncircles[index] , {
            opacity :.5,
        }) 

        gsap.to(secs[index] , {
            opacity:1,
            delay :1
        })
        
    } )
} 

function grayout(){

    gsap.to( mncircles, {
        opacity :.09,
    })

    gsap.to( secs,{
        opacity: 0.3
    })
}