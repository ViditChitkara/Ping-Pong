var bar1=document.getElementById('bar1');
console.log(bar1.getBoundingClientRect());
var bar2=document.getElementById('bar2');
var ball=document.getElementById('ball');
var body=document.getElementById('body');
var bodyDim=body.getBoundingClientRect();
var interval;
var delta=0;
var random,startingDir;
var choices={1:[-1,-1] , 2:[-1,1] , 3:[1,1] , 4:[1,-1]};
var x,y;
var timeInterval=10,factor=10/11;
var bar1Height=bar1.getBoundingClientRect().height;
var bar2Height=bar2.getBoundingClientRect().height;
window.addEventListener('keydown',function (event) {
	if(event.which==32){
        random=Math.ceil(Math.random()*3.8+0.1);
        switch (random){
            case 1:
                startingDir=choices[1];
                break;
            case 2:
                startingDir=choices[2];
                break;
            case 3:
                startingDir=choices[3];
                break;
            case 4:
                startingDir=choices[4];
                break;
        }
        x=startingDir[0]*1;
        y=startingDir[1]*1;
		interval=setInterval(moveball,timeInterval);
	}

	var bar1Y=bar1.getBoundingClientRect();
	var bar2Y=bar2.getBoundingClientRect();


    if(event.which==87){
	    //w
        delta=(bar1Y.top-bodyDim.top)>20 ? 20 : (bar1Y.top-bodyDim.top);
        bar1.style.top=bar1Y.top-delta+"px";
    }

    if(event.which==83){
        //s
        delta=((bodyDim.bottom-bodyDim.top-200)-(bar1Y.top-bodyDim.top))>20 ? 20 : (bodyDim.bottom-bodyDim.top-200)-(bar1Y.top-bodyDim.top);
        bar1.style.top=bar1Y.top+delta+"px";
    }

    if(event.which==38){
        //up
        delta=(bar2Y.top-bodyDim.top)>20 ? 20 : (bar2Y.top-bodyDim.top);
        bar2.style.top=bar2Y.top-delta+"px";
    }
    if(event.which==40){
        //down
        delta=((bodyDim.bottom-bodyDim.top-200)-(bar2Y.top-bodyDim.top))>20 ? 20 : (bodyDim.bottom-bodyDim.top-200)-(bar2Y.top-bodyDim.top);
        bar2.style.top=bar2Y.top+delta+"px";

    }
});

function moveball(event){
    var ballDim=ball.getBoundingClientRect();
    var bar1Y=bar1.getBoundingClientRect();
    var bar2Y=bar2.getBoundingClientRect();
    var mid=ballDim.top+20;

    if(ballDim.top==bodyDim.top){
        y=y*-1;
        timeInterval*=factor;
        clearInterval(interval);
        interval=setInterval(moveball,timeInterval);

    }


    else if(ballDim.left==bodyDim.left && (mid>bar1Y.top && mid<bar1Y.top+bar1Height)){
        x=x*-1;

       

        timeInterval*=factor;
        clearInterval(interval);
        interval=setInterval(moveball,timeInterval);

    }

    else if(ballDim.left==bodyDim.width-40 && (mid>bar2Y.top && mid<bar2Y.top+bar2Height)){
        x=x*-1;
        timeInterval*=factor;
        clearInterval(interval);
        interval=setInterval(moveball,timeInterval);

    }

    else if(ballDim.left==bodyDim.left){
        alert("gameover");
        clearInterval(interval);
    }

    else if((1831-ballDim.left)==40){
        alert("gameover");
        clearInterval(interval);
    }

    else if((990-ballDim.top)==40){
        y=y*-1;
        timeInterval *=factor;
        clearInterval(interval);
        interval=setInterval(moveball,timeInterval);

    }

    if(x<0 && y<0){

        ball.style.left=ballDim.left+x;
        ball.style.top=ballDim.top+y;
    }

    else if(x<0 && y>0){

        ball.style.left=ballDim.left+x;
        ball.style.top=ballDim.top+y;
    }

    else if(x>0 && y<0){

        ball.style.left=ballDim.left+x;
        ball.style.top=ballDim.top+y;
    }

    else if(x>0 && y>0){

        ball.style.left=ballDim.left+x;
        ball.style.top=ballDim.top+y;
    }
	
}