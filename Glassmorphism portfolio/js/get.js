
function sendmsg (e) {

  e.preventDefault();
  
  alert("hello");
     // body... 
}












var controller = new ScrollMagic.Controller({addIndicators: true});

   


   var scene1= new ScrollMagic.Scene({
       
      triggerElement: "#rana",
      offset: 50 ,
      duration: 400,
      triggerHook:0.4 // the scene should last for a scroll distance of 100px
      
       // start this scene after scrolling for 50px
    })
     
      .setClassToggle("#rana","box") 
      .setPin('#rana')
       
      .addIndicators({
      	name:"fade",
      	indent:300
      });
      
      // .addTo(controller); // ass


      // var controller1= new ScrollMagic.Controller({addIndicators:true});


  
        var scense2= new ScrollMagic.Scene({
       
		      triggerElement: "#man",
		      offset: 50 ,
		      duration: 400,
		      triggerHook:0.5 // the scene should last for a scroll distance of 100px
		      
		      
		    }).setClassToggle("#man","text-primary") 
       
		      .addIndicators({
		      	name:"fade in",
		      	indent:200
		      });
      
      // .addTo(controller1); // ass


      controller.addScene([

      	scene1,
      	scense2

      	]);