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
    moveRight(right){
        this.left = right;
    }
}
let dogge= new Dogge("images.jpg",50,50,200);

let pos = 0;
let x = 20
function start() {
    if (pos > 1000 || pos < 0) {
        x = (-x);
    }
    pos+= x;
    dogge.moveRight(pos);
    document.getElementById("game").innerHTML=dogge.getDoggeElement()
    setTimeout(start,150)
}
start()