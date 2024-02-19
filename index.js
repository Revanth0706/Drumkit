var random= document.querySelectorAll(".drum").length;


for(var i=0;i<random;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   var innerelement= this.innerHTML;
    makesound(innerelement);
   
});
}

 document.addEventListener("keypress",function(event){
   makesound(event.key);
 });
 function makesound(key){
   
   switch(key){
      case "q" :
       var audior = new Audio('sounds/crash.mp3');
         audior.play();
         
         break;
       
      case "w" :
         var audioe = new Audio('sounds/kick-bass.mp3');
         audioe.play();
        
         break;

         case "e":
            var audios = new Audio('sounds/snare.mp3');
         audios.play();
        break;

         
         case "r":
            var adio = new Audio("sounds/tom-1.mp3");
         adio.play();
         break;
         
         
         case "t":
            var audi = new Audio("sounds/tom-2.mp3");
         audi.play();
         break;

         
         case "y":
            var dio = new Audio("sounds/tom-3.mp3");
         dio.play();
        break;

        
        case "u":
         var dior = new Audio("sounds/tom-4.mp3");
         dior.play();
        break;

       default:console.log(this.innerHtml);
   }

 }
   
