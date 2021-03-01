window.alert("Why are you here? You shouldn't be wondering around the web like that....");
var poems= ["To those that would listen There's nothing left of that night, <br> but the sound of my fingers that runs down your pictured face. <br> And if you were to say I touched you,<br>then the bait is surely drowned for the excuse I use is rarely legal. <br>And before your mothers shawl I looked through a window for <br> a shrouded man founding only good and praise with certainty. <br> But where your long legged flesh stood alone at the door of my home,<br> where my long heavy hearts breath inhaled just as a slow heave of sea bares<br> it's chest.I rose up just as a storm that vents <br> its claws to <button onclick='nextPoem()' id='poem'> rage </button> upon your fair pale young skin, skin adorned with the feathers <br> of a small bird that lit up my eyes and heart for this was my thirst.<br>There is nothing left of that night.<br>The drift has all but disappeared before I could be pitied as he that fell twice.<br> And if you were to say I touched you, <br>on my mortality and bleached white bones I'd say I was rich in my rudeness to those who would listen",

  "" ]
var index= -1;
  // myArray[i];
  // myArray.filter((x) => { return x > 5; })
function nextPoem(){

  index ++;
  if (index == poems.length ){
      index == 0 ;
  }
  var poem= poems[index];
  document.getElementById("Poemtry1").innerHTML = poem

    var poemtitles= ("<h3>To those that would listen</h3>")
    var titles= -1;
    var Headtitles= poems[titles]
      document.getElementById("Headtitle").innerHTML = titles;


  }
