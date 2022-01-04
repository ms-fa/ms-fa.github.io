const yahoo = new Audio("yahoo.mp3");
var counter = 0;
const button = document.getElementById('logo');

function pop () {
	yahoo.pause();
	yahoo.play();
	document.getElementById('counter').innerText = "counter: " +  ++counter;
	//finishYahoo();
};

/*function finishYahoo(){
      button.disabled = true;
      setTimeout(function(){button.disabled = false;},1300);
  }; */