(function(){
	var app;
	$(document).ready(function(){
		return app.init();
	});
	app = {
		text: "ANTHONY SAMANi",
		index: 0,
		chars: 0,
		speed: 80,
		container: '.typing-text .typing-content',
		init: function(){
			this.chars = this.text.length;
			return this.write();
		},
		write: function(){
			$(this.container).append(this.text[this.index]);
			if(this.index<this.chars){
				this.index++;
				return window.setTimeout(function(){
					return app.write();
				}, this.speed);
			}
		}
	};
}.call(this));

var languages = ["essential","genius", "key"];
var counter = 0;
var  x = document.getElementById("changingText");
setInterval(change, 1400);
function change() {
  x.innerHTML = languages[counter];
  counter++;
  if(counter >= languages.length) {
    counter = 0;
  }
}
