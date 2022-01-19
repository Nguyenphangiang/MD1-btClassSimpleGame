class Dogge {
    constructor(image,top,left,size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getDoggeElement(){
        return '<img width="'+this.size +'"' +
            ' height="'+  this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' +this.top + 'px;left:'+this.left+'px;position:absolute;"/>';
    }
    moveRight(){
        this.left +=20;
    }
    moveLeft(){
        this.left -=20;
    }
}
let dogge= new Dogge("images.jpg",50,50,200);
function start(){
    if (dogge.left<1200){
        dogge.moveRight()
        document.getElementById("game").innerHTML=dogge.getDoggeElement()
        setTimeout(start,300);
    }
}
start()