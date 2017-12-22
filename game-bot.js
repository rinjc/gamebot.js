
function Game(tag){
	this.tag= document.getElementById(tag);
};

Game.prototype.events= function(e, f){
	this.tag.addEventListener(e, f);
};

Game.prototype.animate= function(sizePerSec, startWidth, end, grow, g){
	var startTime= new Date().getTime();
	
	function f(){
		var currentTime= new Date().getTime();
		if(grow === true){
			var newWidth= (startWidth + (((currentTime - startTime)/1000) * sizePerSec));
			g(newWidth);
			if(newWidth < end){
				requestAnimationFrame(f);
			}
		} else {
			var newWidth= (startWidth - (((currentTime - startTime)/1000) / sizePerSec));
			g(newWidth);
			if(newWidth > end){
				requestAnimationFrame(f);
			}
		}
	};
	f();
};

Game.prototype.hide= function(){
	this.tag.style.visibility= "hidden";
};
Game.prototype.show= function(){
	this.tag.style.visibility= "show";
};
Game.prototype.add= function(){
	var res= 0;
	
	for(var args= 0; args < arguments.length; args += 1){
		res += arguments[args];
	};
	return res;
};


function Shape(x, y){
	this.x= x;
	this.y= y;
};
Shape.prototype.triangle= function(coords1, coords2){
	canvas.moveTo(this.x, this.y);
	canvas.lineTo(coords1.x, coords1.y);
	
	canvas.moveTo(coords1.x, coords1.y);
	canvas.lineTo(coords2.x, coords2.y);
	
	canvas.moveTo(coords2.x, coords2.y);
	canvas.lineTo(this.x, this.y);
};








