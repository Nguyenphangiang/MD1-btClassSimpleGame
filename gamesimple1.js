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
    moveDown(down){
        this.top = down;
    }
}
let dogge= new Dogge("images.jpg",50,50,200);
let posD = 0;
let posR = 0;
let x = 20
let y = 10
function start() {
    if (posR > 800 || posR < 0) {
        x = (-x);
    }
    posR+= x;
    dogge.moveRight(posR);
    document.getElementById("game").innerHTML=dogge.getDoggeElement()

    if(posD>400 || posD<0){
       y= (-y);
    }
    posD+=y;
    dogge.moveDown(posD);
    document.getElementById("game").innerHTML=dogge.getDoggeElement();
    setTimeout(start,300)
}
start()