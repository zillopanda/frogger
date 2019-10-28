function drawEnd() {
	//Draw The You Lose When You Die
	var EndX = 48;
	var EndY = 32;
	//Y
	context.fillStyle="#FFFFFF";
	context.fillRect((EndX+2)*size,(EndY+1)*size,4*size,6*size);
	context.fillRect((EndX+10)*size,(EndY+1)*size,4*size,6*size);
	context.fillRect((EndX+4)*size,(EndY+7)*size,8*size,2*size);
	context.fillRect((EndX+6)*size,(EndY+9)*size,4*size,6*size);
	//O
	EndX = 64;
	context.fillRect((EndX+3)*size,(EndY+1)*size,10*size,2*size);
	context.fillRect((EndX+3)*size,(EndY+13)*size,10*size,2*size);
	context.fillRect((EndX+1)*size,(EndY+3)*size,4*size,10*size);
	context.fillRect((EndX+11)*size,(EndY+3)*size,4*size,10*size);
	//U
	EndX = 80;
	context.fillRect((EndX+3)*size,(EndY+13)*size,10*size,2*size);
	context.fillRect((EndX+1)*size,(EndY+1)*size,4*size,12*size);
	context.fillRect((EndX+11)*size,(EndY+1)*size,4*size,12*size);
	//L
	EndX = 112;
	context.fillRect((EndX+1)*size,(EndY+1)*size,4*size,12*size);
	context.fillRect((EndX+1)*size,(EndY+13)*size,14*size,2*size);
	//O
	EndX = 128;
	context.fillRect((EndX+3)*size,(EndY+1)*size,10*size,2*size);
	context.fillRect((EndX+3)*size,(EndY+13)*size,10*size,2*size);
	context.fillRect((EndX+1)*size,(EndY+3)*size,4*size,10*size);
	context.fillRect((EndX+11)*size,(EndY+3)*size,4*size,10*size);
	//S
	EndX = 144;
	context.fillRect((EndX+3)*size,(EndY+1)*size,8*size,2*size);
	context.fillRect((EndX+1)*size,(EndY+3)*size,4*size,4*size);
	context.fillRect((EndX+9)*size,(EndY+3)*size,4*size,2*size);
	context.fillRect((EndX+3)*size,(EndY+7)*size,10*size,2*size);
	context.fillRect((EndX+11)*size,(EndY+9)*size,4*size,4*size);
	context.fillRect((EndX+3)*size,(EndY+13)*size,10*size,2*size);
	context.fillRect((EndX+1)*size,(EndY+11)*size,4*size,2*size);
	//E
	EndX = 160;
	context.fillRect((EndX+1)*size,(EndY+1)*size,4*size,14*size);
	context.fillRect((EndX+5)*size,(EndY+1)*size,8*size,2*size);
	context.fillRect((EndX+5)*size,(EndY+7)*size,6*size,2*size);
	context.fillRect((EndX+5)*size,(EndY+13)*size,8*size,2*size);



}
function drawLog(logX, logY, length, type, logpos) {
	//Draw Each of the Logs of Turtles
	if (type == "log") {
		for (i=1;i<length-1;i++) {
			drawMiddle(logX+16*i,logY+0);
		}  
		drawLeft(logX+0, logY+0);
		drawRight(logX+length*16-16,logY+0);
		function drawLeft(leftX, leftY) {
			context.fillStyle="#95674B";
			context.fillRect((leftX+5)*size,(leftY+10)*size,11*size,3*size);
			context.fillStyle="#E06D50";
			context.fillRect((leftX+5)*size,(leftY+3)*size,11*size,7*size);
			context.fillRect((leftX+3)*size,(leftY+4)*size,7*size,7*size);
			context.fillRect((leftX+2)*size,(leftY+6)*size,1*size,4*size);
			context.fillRect((leftX+5)*size,(leftY+12)*size,3*size,1*size);
			context.fillStyle="#FFFFFF"; 
			context.fillRect((leftX+15)*size,(leftY+4)*size,1*size,1*size);
			context.fillRect((leftX+13)*size,(leftY+7)*size,2*size,1*size);
			context.fillRect((leftX+12)*size,(leftY+10)*size,1*size,1*size);
			context.fillRect((leftX+10)*size,(leftY+8)*size,1*size,2*size);
			context.fillRect((leftX+5)*size,(leftY+5)*size,2*size,1*size);
			context.fillRect((leftX+4)*size,(leftY+8)*size,2*size,1*size);
			context.fillStyle="#010341";
			context.fillRect((leftX+5)*size,(leftY+11)*size,1*size,1*size);
			context.fillRect((leftX+7)*size,(leftY+11)*size,1*size,1*size);
			context.fillRect((leftX+10)*size,(leftY+10)*size,1*size,1*size);
			context.fillRect((leftX+10)*size,(leftY+12)*size,1*size,1*size);
			context.fillRect((leftX+12)*size,(leftY+3)*size,1*size,1*size);
		}
		function drawRight(rightX, rightY) {
			context.fillStyle="#E06D50";
			context.fillRect((rightX+0)*size,(rightY+3)*size,11*size,10*size);
			context.fillRect((rightX+11)*size,(rightY+4)*size,1*size,8*size);
			context.fillStyle="#95674B";
			context.fillRect((rightX+0)*size,(rightY+10)*size,8*size,3*size);
			context.fillStyle="#FFFFFF";
			context.fillRect((rightX+11)*size,(rightY+4)*size,1*size,3*size);
			context.fillRect((rightX+11)*size,(rightY+9)*size,1*size,3*size);
			context.fillRect((rightX+12)*size,(rightY+6)*size,1*size,4*size);
			context.fillRect((rightX+8)*size,(rightY+3)*size,3*size,2*size);
			context.fillRect((rightX+10)*size,(rightY+11)*size,1*size,2*size);
			context.fillRect((rightX+9)*size,(rightY+12)*size,1*size,1*size);
			context.fillRect((rightX+7)*size,(rightY+4)*size,1*size,3*size);
			context.fillRect((rightX+7)*size,(rightY+9)*size,1*size,3*size);
			context.fillRect((rightX+9)*size,(rightY+8)*size,1*size,2*size);
			context.fillRect((rightX+6)*size,(rightY+7)*size,1*size,3*size);
			context.fillRect((rightX+5)*size,(rightY+9)*size,1*size,1*size);
			context.fillRect((rightX+2)*size,(rightY+9)*size,2*size,1*size);
			context.fillRect((rightX+4)*size,(rightY+4)*size,1*size,1*size);
		}
		function drawMiddle(middleX, middleY) {
			context.fillStyle="#95674B";
			context.fillRect((middleX+0)*size,(middleY+10)*size,16*size,3*size);
			context.fillStyle="#E06D50";
			context.fillRect((middleX+0)*size,(middleY+3)*size,16*size,7*size);
			context.fillRect((middleX+8)*size,(middleY+10)*size,6*size,1*size);
			context.fillStyle="#FFFFFF";
			context.fillRect((middleX+1)*size,(middleY+8)*size,1*size,1*size);
			context.fillRect((middleX+3)*size,(middleY+11)*size,3*size,1*size);
			context.fillRect((middleX+4)*size,(middleY+6)*size,1*size,1*size);
			context.fillRect((middleX+8)*size,(middleY+5)*size,2*size,1*size);
			context.fillRect((middleX+9)*size,(middleY+9)*size,3*size,1*size);
			context.fillRect((middleX+13)*size,(middleY+6)*size,1*size,1*size);
			context.fillRect((middleX+15)*size,(middleY+4)*size,1*size,1*size);
			context.fillStyle="#010341";
			context.fillRect((middleX+1)*size,(middleY+3)*size,1*size,1*size);
			context.fillRect((middleX+11)*size,(middleY+3)*size,1*size,1*size);
			context.fillRect((middleX+1)*size,(middleY+12)*size,1*size,1*size);
			context.fillRect((middleX+10)*size,(middleY+12)*size,1*size,1*size);
		}
	} else {
		for (i=0;i<length;i++) {
			drawTurtle(i*16+logX,logY,2);
		}  
		function drawTurtle(turtleX,turtleY,turtlepos) {
			context.fillStyle="#FA0E1B";
			context.fillRect((turtleX+5)*size,(turtleY+5)*size,7*size,7*size);
			context.fillRect((turtleX+4)*size,(turtleY+7)*size,1*size,3*size);
			context.fillRect((turtleX+12)*size,(turtleY+7)*size,1*size,3*size);
			context.fillRect((turtleX+13)*size,(turtleY+8)*size,1*size,1*size);
			context.fillStyle="#30DF29";
			context.fillRect((turtleX+14)*size,(turtleY+8)*size,1*size,1*size);
			context.fillRect((turtleX+15)*size,(turtleY+9)*size,1*size,1*size);
			context.fillRect((turtleX+2)*size,(turtleY+7)*size,2*size,3*size);
			context.fillRect((turtleX+1)*size,(turtleY+8)*size,1*size,1*size);
			context.fillRect((turtleX+5)*size,(turtleY+4)*size,1*size,2*size);
			context.fillRect((turtleX+6)*size,(turtleY+4)*size,1*size,1*size);
			context.fillRect((turtleX+11)*size,(turtleY+4)*size,1*size,2*size);
			context.fillRect((turtleX+5)*size,(turtleY+11)*size,1*size,2*size);
			context.fillRect((turtleX+6)*size,(turtleY+12)*size,1*size,1*size);
			context.fillRect((turtleX+11)*size,(turtleY+11)*size,1*size,2*size);
			context.fillStyle="#FFFFFF";		
			context.fillRect((turtleX+2)*size,(turtleY+7)*size,1*size,1*size);
			context.fillRect((turtleX+2)*size,(turtleY+9)*size,1*size,1*size);
			context.fillRect((turtleX+6)*size,(turtleY+3)*size,1*size,1*size);
			context.fillRect((turtleX+7)*size,(turtleY+4)*size,1*size,1*size);
			context.fillRect((turtleX+12)*size,(turtleY+3)*size,1*size,1*size);
			context.fillRect((turtleX+12)*size,(turtleY+4)*size,2*size,1*size);
			context.fillRect((turtleX+6)*size,(turtleY+13)*size,1*size,1*size);
			context.fillRect((turtleX+7)*size,(turtleY+12)*size,1*size,1*size);
			context.fillRect((turtleX+12)*size,(turtleY+13)*size,1*size,1*size);
			context.fillRect((turtleX+12)*size,(turtleY+12)*size,2*size,1*size);
			context.fillRect((turtleX+6)*size,(turtleY+10)*size,1*size,1*size);
			context.fillRect((turtleX+7)*size,(turtleY+11)*size,3*size,1*size);
			context.fillRect((turtleX+10)*size,(turtleY+10)*size,1*size,1*size);
			context.fillRect((turtleX+11)*size,(turtleY+9)*size,1*size,1*size);
		}
	}
}
function DrawTime(TimeValue) {
	// The green bar down the botom
	context.fillStyle="#30DF29";
	context.fillRect((160-TimeValue*2)*size,(289)*size,TimeValue*2*size,14*size);
}
function drawScore(scoreX, scoreY, scoreValue) {
	//Call Functions to draw the digits
	DrawNumber(scoreX+0, scoreY+0, Math.floor(scoreValue/10000)%10);
	DrawNumber(scoreX+16, scoreY+0, Math.floor(scoreValue/1000)%10);
	DrawNumber(scoreX+32, scoreY+0, Math.floor(scoreValue/100)%10);
	DrawNumber(scoreX+48, scoreY+0, Math.floor(scoreValue/10)%10);
	DrawNumber(scoreX+64, scoreY+0, Math.floor(scoreValue/1)%10);
}
function DrawNumber(NumberX, NumberY, Number) {
	// Check the number then draw
	if (Number == 0) {
		context.fillStyle="#FA0E1B";
		context.fillRect((NumberX+5)*size,(NumberY+1)*size,6*size,2*size);
		context.fillRect((NumberX+9)*size,(NumberY+3)*size,4*size,2*size);
		context.fillRect((NumberX+11)*size,(NumberY+5)*size,4*size,6*size);
		context.fillRect((NumberX+11)*size,(NumberY+11)*size,2*size,2*size);
		context.fillRect((NumberX+5)*size,(NumberY+13)*size,6*size,2*size);
		context.fillRect((NumberX+3)*size,(NumberY+11)*size,4*size,2*size);
		context.fillRect((NumberX+1)*size,(NumberY+5)*size,4*size,6*size);
		context.fillRect((NumberX+3)*size,(NumberY+3)*size,2*size,2*size);
	}
	if (Number == 1) {
		context.fillStyle="#FA0E1B";
		context.fillRect((NumberX+6)*size,(NumberY+1)*size,4*size,14*size);
		context.fillRect((NumberX+4)*size,(NumberY+3)*size,2*size,2*size);
		context.fillRect((NumberX+2)*size,(NumberY+13)*size,12*size,2*size);
	}
	if (Number == 2) {
		context.fillStyle="#FA0E1B";
		context.fillRect((NumberX+2)*size,(NumberY+3)*size,4*size,2*size);
		context.fillRect((NumberX+4)*size,(NumberY+1)*size,10*size,2*size);
		context.fillRect((NumberX+12)*size,(NumberY+3)*size,4*size,4*size);
		context.fillRect((NumberX+10)*size,(NumberY+5)*size,4*size,4*size);
		context.fillRect((NumberX+6)*size,(NumberY+7)*size,6*size,4*size);
		context.fillRect((NumberX+4)*size,(NumberY+9)*size,4*size,4*size);
		context.fillRect((NumberX+2)*size,(NumberY+11)*size,2*size,2*size);
		context.fillRect((NumberX+2)*size,(NumberY+13)*size,14*size,2*size);
	}
	if (Number == 3) {
		context.fillStyle="#FA0E1B";
		context.fillRect((NumberX+3)*size,(NumberY+1)*size,12*size,2*size);
		context.fillRect((NumberX+9)*size,(NumberY+3)*size,4*size,2*size);
		context.fillRect((NumberX+7)*size,(NumberY+5)*size,4*size,2*size);
		context.fillRect((NumberX+5)*size,(NumberY+7)*size,8*size,2*size);
		context.fillRect((NumberX+11)*size,(NumberY+9)*size,4*size,4*size);
		context.fillRect((NumberX+3)*size,(NumberY+13)*size,10*size,2*size);
		context.fillRect((NumberX+1)*size,(NumberY+11)*size,4*size,2*size);
	}
	if (Number == 4) {
		context.fillStyle="#FA0E1B";
		context.fillRect((NumberX+7)*size,(NumberY+1)*size,2*size,2*size);
		context.fillRect((NumberX+5)*size,(NumberY+3)*size,4*size,2*size);
		context.fillRect((NumberX+3)*size,(NumberY+5)*size,4*size,2*size);
		context.fillRect((NumberX+1)*size,(NumberY+7)*size,4*size,4*size);
		context.fillRect((NumberX+5)*size,(NumberY+9)*size,10*size,2*size);
		context.fillRect((NumberX+9)*size,(NumberY+1)*size,4*size,14*size);
	}
	if (Number == 5) {
		context.fillStyle="#FA0E1B";
		context.fillRect((NumberX+1)*size,(NumberY+1)*size,12*size,2*size);
		context.fillRect((NumberX+1)*size,(NumberY+3)*size,4*size,2*size);
		context.fillRect((NumberX+1)*size,(NumberY+5)*size,12*size,2*size);
		context.fillRect((NumberX+11)*size,(NumberY+7)*size,4*size,6*size);
		context.fillRect((NumberX+1)*size,(NumberY+11)*size,4*size,2*size);
		context.fillRect((NumberX+3)*size,(NumberY+13)*size,10*size,2*size);
	}
	if (Number == 6) {
		context.fillStyle="#FA0E1B";
		context.fillRect((NumberX+5)*size,(NumberY+1)*size,8*size,2*size);
		context.fillRect((NumberX+3)*size,(NumberY+3)*size,4*size,2*size);
		context.fillRect((NumberX+1)*size,(NumberY+5)*size,4*size,8*size);
		context.fillRect((NumberX+3)*size,(NumberY+13)*size,10*size,2*size);
		context.fillRect((NumberX+11)*size,(NumberY+9)*size,4*size,4*size);
		context.fillRect((NumberX+5)*size,(NumberY+7)*size,8*size,2*size);
	}
	if (Number == 7) {
		context.fillStyle="#FA0E1B";
		context.fillRect((NumberX+1)*size,(NumberY+1)*size,4*size,4*size);
		context.fillRect((NumberX+5)*size,(NumberY+1)*size,6*size,2*size);
		context.fillRect((NumberX+11)*size,(NumberY+1)*size,4*size,4*size);
		context.fillRect((NumberX+9)*size,(NumberY+5)*size,4*size,2*size);
		context.fillRect((NumberX+7)*size,(NumberY+7)*size,4*size,2*size);
		context.fillRect((NumberX+5)*size,(NumberY+9)*size,4*size,6*size);
	}
	if (Number == 8) {
		context.fillStyle="#FA0E1B";
		context.fillRect((NumberX+3)*size,(NumberY+1)*size,8*size,2*size);
		context.fillRect((NumberX+1)*size,(NumberY+3)*size,4*size,4*size);
		context.fillRect((NumberX+11)*size,(NumberY+3)*size,2*size,4*size);
		context.fillRect((NumberX+3)*size,(NumberY+5)*size,4*size,4*size);
		context.fillRect((NumberX+7)*size,(NumberY+7)*size,4*size,4*size);
		context.fillRect((NumberX+11)*size,(NumberY+9)*size,4*size,4*size);
		context.fillRect((NumberX+3)*size,(NumberY+13)*size,10*size,2*size);
		context.fillRect((NumberX+1)*size,(NumberY+9)*size,2*size,4*size);
	}
	if (Number == 9) {
		context.fillStyle="#FA0E1B";
		context.fillRect((NumberX+3)*size,(NumberY+1)*size,10*size,2*size);
		context.fillRect((NumberX+1)*size,(NumberY+3)*size,4*size,4*size);
		context.fillRect((NumberX+3)*size,(NumberY+7)*size,8*size,2*size);
		context.fillRect((NumberX+11)*size,(NumberY+3)*size,4*size,8*size);
		context.fillRect((NumberX+9)*size,(NumberY+11)*size,4*size,2*size);
		context.fillRect((NumberX+3)*size,(NumberY+13)*size,8*size,2*size);
	}
}
function DrawCar(CarX, CarY, Type) {
	//Check Car type then draw it
	if (Type == 1) {
		context.fillStyle="#F4F536";
		context.fillRect((CarX+2)*size,(CarY+5)*size,12*size,6*size);
		context.fillRect((CarX+1)*size,(CarY+6)*size,1*size,4*size);
		context.fillRect((CarX+0)*size,(CarY+7)*size,15*size,2*size);

		context.fillStyle="#9324F5";
		context.fillRect((CarX+4)*size,(CarY+4)*size,1*size,1*size);
		context.fillRect((CarX+4)*size,(CarY+11)*size,1*size,1*size);
		context.fillRect((CarX+12)*size,(CarY+4)*size,1*size,1*size);
		context.fillRect((CarX+12)*size,(CarY+11)*size,1*size,1*size);
		context.fillRect((CarX+4)*size,(CarY+7)*size,3*size,2*size);
		context.fillRect((CarX+5)*size,(CarY+6)*size,3*size,1*size);
		context.fillRect((CarX+5)*size,(CarY+9)*size,3*size,1*size);
		context.fillRect((CarX+10)*size,(CarY+6)*size,6*size,1*size);
		context.fillRect((CarX+10)*size,(CarY+9)*size,6*size,1*size);

		context.fillStyle="#FA0E1B";
		context.fillRect((CarX+9)*size,(CarY+7)*size,1*size,2*size);
		context.fillRect((CarX+11)*size,(CarY+7)*size,1*size,2*size);
		context.fillRect((CarX+13)*size,(CarY+7)*size,1*size,2*size);
		context.fillRect((CarX+2)*size,(CarY+2)*size,5*size,2*size);
		context.fillRect((CarX+2)*size,(CarY+12)*size,5*size,2*size);
		context.fillRect((CarX+10)*size,(CarY+1)*size,5*size,3*size);
		context.fillRect((CarX+10)*size,(CarY+12)*size,5*size,3*size);
	}
	if (Type == 2) {
		context.fillStyle="#FFFFFF";
		context.fillRect((CarX+2)*size,(CarY+5)*size,8*size,6*size);
		context.fillRect((CarX+1)*size,(CarY+2)*size,7*size,2*size);
		context.fillRect((CarX+1)*size,(CarY+12)*size,7*size,2*size);
		context.fillRect((CarX+1)*size,(CarY+6)*size,1*size,4*size);
		context.fillRect((CarX+12)*size,(CarY+2)*size,1*size,12*size);
		context.fillRect((CarX+13)*size,(CarY+2)*size,2*size,1*size);
		context.fillRect((CarX+13)*size,(CarY+4)*size,2*size,1*size);
		context.fillRect((CarX+13)*size,(CarY+6)*size,2*size,1*size);
		context.fillRect((CarX+13)*size,(CarY+9)*size,2*size,1*size);
		context.fillRect((CarX+13)*size,(CarY+11)*size,2*size,1*size);
		context.fillRect((CarX+13)*size,(CarY+13)*size,2*size,1*size);

		context.fillStyle="#FA0E1B";
		context.fillRect((CarX+1)*size,(CarY+2)*size,1*size,2*size);
		context.fillRect((CarX+3)*size,(CarY+2)*size,1*size,2*size);
		context.fillRect((CarX+5)*size,(CarY+2)*size,1*size,2*size);
		context.fillRect((CarX+7)*size,(CarY+2)*size,1*size,2*size);
		context.fillRect((CarX+2)*size,(CarY+12)*size,1*size,2*size);
		context.fillRect((CarX+4)*size,(CarY+12)*size,1*size,2*size);
		context.fillRect((CarX+6)*size,(CarY+12)*size,1*size,2*size);
		context.fillRect((CarX+13)*size,(CarY+3)*size,1*size,1*size);
		context.fillRect((CarX+13)*size,(CarY+5)*size,1*size,1*size);
		context.fillRect((CarX+13)*size,(CarY+7)*size,1*size,2*size);
		context.fillRect((CarX+13)*size,(CarY+10)*size,1*size,1*size);
		context.fillRect((CarX+13)*size,(CarY+12)*size,1*size,1*size);

		context.fillStyle="#30DF29";
		context.fillRect((CarX+2)*size,(CarY+4)*size,1*size,1*size);
		context.fillRect((CarX+6)*size,(CarY+4)*size,1*size,1*size);
		context.fillRect((CarX+2)*size,(CarY+11)*size,1*size,1*size);
		context.fillRect((CarX+6)*size,(CarY+11)*size,1*size,1*size);
		context.fillRect((CarX+3)*size,(CarY+7)*size,3*size,2*size);
		context.fillRect((CarX+6)*size,(CarY+6)*size,1*size,1*size);
		context.fillRect((CarX+6)*size,(CarY+9)*size,1*size,1*size);
		context.fillRect((CarX+7)*size,(CarY+6)*size,1*size,4*size);
		context.fillRect((CarX+9)*size,(CarY+6)*size,1*size,1*size);
		context.fillRect((CarX+9)*size,(CarY+9)*size,1*size,1*size);
		context.fillRect((CarX+9)*size,(CarY+4)*size,3*size,1*size);
		context.fillRect((CarX+9)*size,(CarY+11)*size,3*size,1*size);


	}
	if (Type == 3) {
		context.fillStyle="#FB39F7";
		context.fillRect((CarX+3)*size,(CarY+4)*size,6*size,8*size);
		context.fillRect((CarX+9)*size,(CarY+5)*size,2*size,6*size);
		context.fillRect((CarX+11)*size,(CarY+4)*size,5*size,8*size);
		context.fillStyle="#F4F536";
		context.fillRect((CarX+3)*size,(CarY+6)*size,1*size,1*size);
		context.fillRect((CarX+3)*size,(CarY+9)*size,1*size,1*size);
		context.fillRect((CarX+5)*size,(CarY+3)*size,2*size,1*size);
		context.fillRect((CarX+5)*size,(CarY+12)*size,2*size,1*size);
		context.fillRect((CarX+12)*size,(CarY+3)*size,3*size,1*size);
		context.fillRect((CarX+12)*size,(CarY+12)*size,3*size,1*size);
		context.fillStyle="#2BDFF5";
		context.fillRect((CarX+3)*size,(CarY+4)*size,1*size,1*size);	
		context.fillRect((CarX+3)*size,(CarY+11)*size,1*size,1*size);
		context.fillRect((CarX+2)*size,(CarY+5)*size,1*size,6*size);	
		context.fillRect((CarX+7)*size,(CarY+5)*size,2*size,1*size);	
		context.fillRect((CarX+7)*size,(CarY+10)*size,2*size,1*size);	
		context.fillRect((CarX+6)*size,(CarY+6)*size,2*size,4*size);
		context.fillRect((CarX+10)*size,(CarY+5)*size,1*size,1*size);	
		context.fillRect((CarX+10)*size,(CarY+10)*size,1*size,1*size);
		context.fillRect((CarX+16)*size,(CarY+5)*size,1*size,1*size);	
		context.fillRect((CarX+16)*size,(CarY+10)*size,1*size,1*size);
		context.fillRect((CarX+12)*size,(CarY+6)*size,3*size,4*size);
	}
	if (Type == 4) {
		context.fillStyle="#FFFFFF";
		context.fillRect((CarX+1)*size,(CarY+5)*size,13*size,6*size);
		context.fillRect((CarX+14)*size,(CarY+6)*size,1*size,4*size);
		context.fillRect((CarX+15)*size,(CarY+7)*size,1*size,2*size);
		context.fillStyle="#FA0E1B";
		context.fillRect((CarX+1)*size,(CarY+1)*size,5*size,3*size);
		context.fillRect((CarX+1)*size,(CarY+12)*size,5*size,3*size);
		context.fillRect((CarX+9)*size,(CarY+2)*size,5*size,2*size);
		context.fillRect((CarX+9)*size,(CarY+12)*size,5*size,2*size);
		context.fillRect((CarX+2)*size,(CarY+7)*size,1*size,2*size);
		context.fillRect((CarX+4)*size,(CarY+7)*size,1*size,2*size);
		context.fillRect((CarX+6)*size,(CarY+7)*size,1*size,2*size);
		context.fillStyle="#30DF29";
		context.fillRect((CarX+0)*size,(CarY+6)*size,6*size,1*size);
		context.fillRect((CarX+0)*size,(CarY+9)*size,6*size,1*size);
		context.fillRect((CarX+8)*size,(CarY+6)*size,3*size,1*size);
		context.fillRect((CarX+8)*size,(CarY+9)*size,3*size,1*size);
		context.fillRect((CarX+9)*size,(CarY+7)*size,3*size,2*size);
		context.fillRect((CarX+3)*size,(CarY+4)*size,1*size,1*size);
		context.fillRect((CarX+11)*size,(CarY+4)*size,1*size,1*size);
		context.fillRect((CarX+3)*size,(CarY+11)*size,1*size,1*size);
		context.fillRect((CarX+11)*size,(CarY+11)*size,1*size,1*size);
		context.fillStyle="#000000";
		context.fillRect((CarX+1)*size,(CarY+7)*size,1*size,1*size);
		context.fillRect((CarX+5)*size,(CarY+7)*size,1*size,1*size);
	}
	if (Type == 5) {
		context.fillStyle="#F4F536";
		context.fillRect((CarX+2)*size,(CarY+5)*size,12*size,6*size);
		context.fillRect((CarX+1)*size,(CarY+6)*size,1*size,4*size);
		context.fillRect((CarX+0)*size,(CarY+7)*size,15*size,2*size);

		context.fillStyle="#9324F5";
		context.fillRect((CarX+4)*size,(CarY+4)*size,1*size,1*size);
		context.fillRect((CarX+4)*size,(CarY+11)*size,1*size,1*size);
		context.fillRect((CarX+12)*size,(CarY+4)*size,1*size,1*size);
		context.fillRect((CarX+12)*size,(CarY+11)*size,1*size,1*size);
		context.fillRect((CarX+4)*size,(CarY+7)*size,3*size,2*size);
		context.fillRect((CarX+5)*size,(CarY+6)*size,3*size,1*size);
		context.fillRect((CarX+5)*size,(CarY+9)*size,3*size,1*size);
		context.fillRect((CarX+10)*size,(CarY+6)*size,6*size,1*size);
		context.fillRect((CarX+10)*size,(CarY+9)*size,6*size,1*size);

		context.fillStyle="#FA0E1B";
		context.fillRect((CarX+9)*size,(CarY+7)*size,1*size,2*size);
		context.fillRect((CarX+11)*size,(CarY+7)*size,1*size,2*size);
		context.fillRect((CarX+13)*size,(CarY+7)*size,1*size,2*size);
		context.fillRect((CarX+2)*size,(CarY+2)*size,5*size,2*size);
		context.fillRect((CarX+2)*size,(CarY+12)*size,5*size,2*size);
		context.fillRect((CarX+10)*size,(CarY+1)*size,5*size,3*size);
		context.fillRect((CarX+10)*size,(CarY+12)*size,5*size,3*size);
	}
}
function DrawFrog(FrogX,FrogY,FrogRotation) {
	//Check frog rotaton then draw
	if (FrogRotation == "up") {
		context.fillStyle="#F4F536";
		context.fillRect((FrogX+5)*size,(FrogY+6)*size,6*size,6*size);
		context.fillRect((FrogX+6)*size,(FrogY+5)*size,4*size,8*size);

		context.fillStyle="#30DF29";
		context.fillRect((FrogX+3)*size,(FrogY+8)*size,2*size,1*size);
		context.fillRect((FrogX+3)*size,(FrogY+10)*size,2*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+8)*size,2*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+10)*size,2*size,1*size);
		context.fillRect((FrogX+3)*size,(FrogY+5)*size,1*size,3*size);
		context.fillRect((FrogX+3)*size,(FrogY+11)*size,1*size,3*size);
		context.fillRect((FrogX+12)*size,(FrogY+5)*size,1*size,3*size);
		context.fillRect((FrogX+12)*size,(FrogY+11)*size,1*size,3*size);
		context.fillRect((FrogX+2)*size,(FrogY+6)*size,1*size,1*size);
		context.fillRect((FrogX+13)*size,(FrogY+6)*size,1*size,1*size);
		context.fillRect((FrogX+2)*size,(FrogY+12)*size,1*size,1*size);
		context.fillRect((FrogX+13)*size,(FrogY+12)*size,1*size,1*size);
		context.fillRect((FrogX+5)*size,(FrogY+6)*size,2*size,2*size);
		context.fillRect((FrogX+9)*size,(FrogY+6)*size,2*size,2*size);
		context.fillRect((FrogX+7)*size,(FrogY+5)*size,1*size,1*size);
		context.fillRect((FrogX+5)*size,(FrogY+11)*size,1*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+12)*size,1*size,1*size);
		context.fillRect((FrogX+7)*size,(FrogY+11)*size,1*size,1*size);
		context.fillRect((FrogX+9)*size,(FrogY+12)*size,1*size,1*size);
		context.fillRect((FrogX+10)*size,(FrogY+11)*size,1*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+9)*size,1*size,2*size);

		context.fillStyle="#FB39F7";
		context.fillRect((FrogX+5)*size,(FrogY+6)*size,1*size,1*size);
		context.fillRect((FrogX+10)*size,(FrogY+6)*size,1*size,1*size);
	}
	if (FrogRotation == "down") {
		context.fillStyle="#F4F536";
		context.fillRect((FrogX+5)*size,(FrogY+7)*size,6*size,6*size);
		context.fillRect((FrogX+6)*size,(FrogY+6)*size,4*size,8*size);

		context.fillStyle="#30DF29";
		context.fillRect((FrogX+3)*size,(FrogY+8)*size,2*size,1*size);
		context.fillRect((FrogX+3)*size,(FrogY+10)*size,2*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+8)*size,2*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+10)*size,2*size,1*size);
		context.fillRect((FrogX+3)*size,(FrogY+5)*size,1*size,3*size);
		context.fillRect((FrogX+3)*size,(FrogY+11)*size,1*size,3*size);
		context.fillRect((FrogX+12)*size,(FrogY+5)*size,1*size,3*size);
		context.fillRect((FrogX+12)*size,(FrogY+11)*size,1*size,3*size);
		context.fillRect((FrogX+2)*size,(FrogY+6)*size,1*size,1*size);
		context.fillRect((FrogX+13)*size,(FrogY+6)*size,1*size,1*size);
		context.fillRect((FrogX+2)*size,(FrogY+12)*size,1*size,1*size);
		context.fillRect((FrogX+13)*size,(FrogY+12)*size,1*size,1*size);
		context.fillRect((FrogX+5)*size,(FrogY+11)*size,2*size,2*size);
		context.fillRect((FrogX+9)*size,(FrogY+11)*size,2*size,2*size);
		context.fillRect((FrogX+8)*size,(FrogY+13)*size,1*size,1*size);
		context.fillRect((FrogX+5)*size,(FrogY+7)*size,1*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+6)*size,1*size,1*size);
		context.fillRect((FrogX+8)*size,(FrogY+7)*size,1*size,1*size);
		context.fillRect((FrogX+9)*size,(FrogY+6)*size,1*size,1*size);
		context.fillRect((FrogX+10)*size,(FrogY+7)*size,1*size,1*size);
		context.fillRect((FrogX+9)*size,(FrogY+8)*size,1*size,2*size);

		context.fillStyle="#FB39F7";
		context.fillRect((FrogX+5)*size,(FrogY+12)*size,1*size,1*size);
		context.fillRect((FrogX+10)*size,(FrogY+12)*size,1*size,1*size);
	}
	if (FrogRotation == "left") {
		context.fillStyle="#F4F536";
		context.fillRect((FrogX+6)*size,(FrogY+5)*size,6*size,6*size);
		context.fillRect((FrogX+5)*size,(FrogY+6)*size,8*size,4*size);

		context.fillStyle="#30DF29";
		context.fillRect((FrogX+8)*size,(FrogY+3)*size,1*size,2*size);
		context.fillRect((FrogX+10)*size,(FrogY+3)*size,1*size,2*size);
		context.fillRect((FrogX+8)*size,(FrogY+11)*size,1*size,2*size);
		context.fillRect((FrogX+10)*size,(FrogY+11)*size,1*size,2*size);
		context.fillRect((FrogX+5)*size,(FrogY+3)*size,3*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+3)*size,3*size,1*size);
		context.fillRect((FrogX+5)*size,(FrogY+12)*size,3*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+12)*size,3*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+2)*size,1*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+13)*size,1*size,1*size);
		context.fillRect((FrogX+12)*size,(FrogY+2)*size,1*size,1*size);
		context.fillRect((FrogX+12)*size,(FrogY+13)*size,1*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+5)*size,2*size,2*size);
		context.fillRect((FrogX+6)*size,(FrogY+9)*size,2*size,2*size);
		context.fillRect((FrogX+5)*size,(FrogY+8)*size,1*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+5)*size,1*size,1*size);
		context.fillRect((FrogX+12)*size,(FrogY+6)*size,1*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+8)*size,1*size,1*size);
		context.fillRect((FrogX+12)*size,(FrogY+9)*size,1*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+10)*size,1*size,1*size);
		context.fillRect((FrogX+9)*size,(FrogY+9)*size,2*size,1*size);

		context.fillStyle="#FB39F7";
		context.fillRect((FrogX+6)*size,(FrogY+5)*size,1*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+10)*size,1*size,1*size);
	}
	if (FrogRotation == "right") {
		context.fillStyle="#F4F536";
		context.fillRect((FrogX+7)*size,(FrogY+5)*size,6*size,6*size);
		context.fillRect((FrogX+6)*size,(FrogY+6)*size,8*size,4*size);

		context.fillStyle="#30DF29";
		context.fillRect((FrogX+8)*size,(FrogY+3)*size,1*size,2*size);
		context.fillRect((FrogX+10)*size,(FrogY+3)*size,1*size,2*size);
		context.fillRect((FrogX+8)*size,(FrogY+11)*size,1*size,2*size);
		context.fillRect((FrogX+10)*size,(FrogY+11)*size,1*size,2*size);
		context.fillRect((FrogX+5)*size,(FrogY+3)*size,3*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+3)*size,3*size,1*size);
		context.fillRect((FrogX+5)*size,(FrogY+12)*size,3*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+12)*size,3*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+2)*size,1*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+13)*size,1*size,1*size);
		context.fillRect((FrogX+12)*size,(FrogY+2)*size,1*size,1*size);
		context.fillRect((FrogX+12)*size,(FrogY+13)*size,1*size,1*size);
		context.fillRect((FrogX+11)*size,(FrogY+5)*size,2*size,2*size);
		context.fillRect((FrogX+11)*size,(FrogY+9)*size,2*size,2*size);
		context.fillRect((FrogX+13)*size,(FrogY+7)*size,1*size,1*size);
		context.fillRect((FrogX+7)*size,(FrogY+5)*size,1*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+6)*size,1*size,1*size);
		context.fillRect((FrogX+7)*size,(FrogY+7)*size,1*size,1*size);
		context.fillRect((FrogX+6)*size,(FrogY+9)*size,1*size,1*size);
		context.fillRect((FrogX+7)*size,(FrogY+10)*size,1*size,1*size);
		context.fillRect((FrogX+8)*size,(FrogY+6)*size,2*size,1*size);

		context.fillStyle="#FB39F7";
		context.fillRect((FrogX+12)*size,(FrogY+5)*size,1*size,1*size);
		context.fillRect((FrogX+12)*size,(FrogY+10)*size,1*size,1*size);
	}

}
function DrawMap() {
	//Blank Out the screen black
	context.fillStyle="#000000";
	context.fillRect(0,0,224*size,304*size);
	//Fill the top half blue
	context.fillStyle="#010341";
	context.fillRect(0*size,0*size,224*size,160*size);
	
	//Draw the purple blocks
	for (i = 0; i < 14; i++) { 
		DrawPurple(i*16, 160);
	}
	for (i = 0; i < 14; i++) { 
		DrawPurple(i*16, 256);
	}
	
	
	DrawBank();

	DrawWords();


	function DrawWords() {
		context.fillStyle="#FFFFFF";
		DrawScore(0,0);
		DrawScore(144,0);
		
		//Draw The "HI-"
		//H
		context.fillRect((97)*size,(1)*size,4*size,14*size);
		context.fillRect((107)*size,(1)*size,4*size,14*size);
		context.fillRect((101)*size,(7)*size,6*size,2*size);

		//I
		context.fillRect((114)*size,(1)*size,12*size,2*size);
		context.fillRect((114)*size,(13)*size,12*size,2*size);
		context.fillRect((118)*size,(3)*size,4*size,10*size);

		//-
		context.fillRect((129)*size,(7)*size,14*size,2*size);

		function DrawScore(ScoreX, ScoreY) {
			//Draw the "Score"
			//S
			context.fillRect((ScoreX+3)*size,(ScoreY+1)*size,8*size,2*size);
			context.fillRect((ScoreX+1)*size,(ScoreY+3)*size,4*size,4*size);
			context.fillRect((ScoreX+9)*size,(ScoreY+3)*size,4*size,2*size);
			context.fillRect((ScoreX+3)*size,(ScoreY+7)*size,10*size,2*size);
			context.fillRect((ScoreX+11)*size,(ScoreY+9)*size,4*size,4*size);
			context.fillRect((ScoreX+3)*size,(ScoreY+13)*size,10*size,2*size);
			context.fillRect((ScoreX+1)*size,(ScoreY+11)*size,4*size,2*size);

			//C
			context.fillRect((ScoreX+21)*size,(ScoreY+1)*size,8*size,2*size);
			context.fillRect((ScoreX+19)*size,(ScoreY+3)*size,4*size,2*size);
			context.fillRect((ScoreX+17)*size,(ScoreY+5)*size,4*size,6*size);
			context.fillRect((ScoreX+21)*size,(ScoreY+13)*size,8*size,2*size);
			context.fillRect((ScoreX+19)*size,(ScoreY+11)*size,4*size,2*size);
			context.fillRect((ScoreX+27)*size,(ScoreY+3)*size,4*size,2*size);
			context.fillRect((ScoreX+27)*size,(ScoreY+11)*size,4*size,2*size);

			//O
			context.fillRect((ScoreX+35)*size,(ScoreY+1)*size,10*size,2*size);
			context.fillRect((ScoreX+35)*size,(ScoreY+13)*size,10*size,2*size);
			context.fillRect((ScoreX+33)*size,(ScoreY+3)*size,4*size,10*size);
			context.fillRect((ScoreX+43)*size,(ScoreY+3)*size,4*size,10*size);

			//R
			context.fillRect((ScoreX+49)*size,(ScoreY+1)*size,4*size,14*size);
			context.fillRect((ScoreX+53)*size,(ScoreY+1)*size,8*size,2*size);
			context.fillRect((ScoreX+59)*size,(ScoreY+3)*size,4*size,6*size);
			context.fillRect((ScoreX+57)*size,(ScoreY+7)*size,2*size,2*size);
			context.fillRect((ScoreX+53)*size,(ScoreY+9)*size,6*size,2*size);
			context.fillRect((ScoreX+55)*size,(ScoreY+11)*size,6*size,2*size);
			context.fillRect((ScoreX+57)*size,(ScoreY+13)*size,6*size,2*size);

			//E
			context.fillRect((ScoreX+65)*size,(ScoreY+1)*size,4*size,14*size);
			context.fillRect((ScoreX+69)*size,(ScoreY+1)*size,8*size,2*size);
			context.fillRect((ScoreX+69)*size,(ScoreY+7)*size,6*size,2*size);
			context.fillRect((ScoreX+69)*size,(ScoreY+13)*size,8*size,2*size);

		}
		//Draw the Time
		context.fillStyle="#F4F536";
		//T
		context.fillRect((162)*size,(289)*size,12*size,2*size);
		context.fillRect((166)*size,(289)*size,4*size,14*size);

		//I
		context.fillRect((178)*size,(289)*size,12*size,2*size);
		context.fillRect((178)*size,(301)*size,12*size,2*size);
		context.fillRect((182)*size,(291)*size,4*size,12*size);

		//M
		context.fillRect((193)*size,(289)*size,4*size,14*size);
		context.fillRect((203)*size,(289)*size,4*size,14*size);
		context.fillRect((197)*size,(291)*size,2*size,6*size);
		context.fillRect((199)*size,(293)*size,2*size,6*size);
		context.fillRect((201)*size,(291)*size,2*size,6*size);

		//E
		context.fillRect((209)*size,(289)*size,4*size,14*size);
		context.fillRect((209)*size,(289)*size,12*size,2*size);
		context.fillRect((209)*size,(295)*size,10*size,2*size);
		context.fillRect((209)*size,(301)*size,12*size,2*size);

	}
	function DrawBank() {
		//Draw the green bank up the top
		for (i = 0; i < 14; i++) { 
			DrawTile(i*16, 48);
			DrawTile(i*16, 64);
			DrawEdge(i*16, 64);
		}

		for (i = 2; i <= 11; i=i+3) { 
			DrawEmpty(i*16, 64);
		}

		function DrawEdge(EdgeX, EdgeY) {
			//The the orange edges down the bottom
			context.fillStyle="#EE481D";
			context.fillRect(EdgeX*size,(EdgeY+14)*size,16*size,2*size);
			context.fillStyle="#30DF29";
			context.fillRect((EdgeX+1)*size,(EdgeY+14)*size,1*size,1*size);
			context.fillRect((EdgeX+6)*size,(EdgeY+14)*size,1*size,1*size);
			context.fillRect((EdgeX+11)*size,(EdgeY+14)*size,1*size,1*size);
			context.fillRect((EdgeX+14)*size,(EdgeY+14)*size,1*size,1*size);
			context.fillStyle="#010341";
			context.fillRect((EdgeX+1)*size,(EdgeY+15)*size,1*size,1*size);
			context.fillRect((EdgeX+2)*size,(EdgeY+14)*size,1*size,1*size);
			context.fillRect((EdgeX+6)*size,(EdgeY+15)*size,1*size,1*size);
			context.fillRect((EdgeX+7)*size,(EdgeY+14)*size,1*size,1*size);
			context.fillRect((EdgeX+11)*size,(EdgeY+15)*size,1*size,1*size);
			context.fillRect((EdgeX+12)*size,(EdgeY+14)*size,1*size,1*size);
			context.fillRect((EdgeX+14)*size,(EdgeY+15)*size,1*size,1*size);
			context.fillRect((EdgeX+15)*size,(EdgeY+14)*size,1*size,1*size);
			context.fillRect((EdgeX+3)*size,(EdgeY+15)*size,2*size,1*size);
			context.fillRect((EdgeX+6)*size,(EdgeY+15)*size,1*size,1*size);
			context.fillRect((EdgeX+9)*size,(EdgeY+15)*size,1*size,1*size);

		}

		function DrawTile(TileX, TileY) {
			// Do the detail on the tile
			context.fillStyle="#30DF29";
			context.fillRect(TileX*size,TileY*size,16*size,16*size);

			DrawT(TileX+2, TileY+1)
			DrawT(TileX+7, TileY+1)
			DrawT(TileX+5, TileY+4)
			DrawT(TileX+14, TileY+4)
			DrawT(TileX+3, TileY+8)
			DrawT(TileX+10, TileY+8)
			DrawT(TileX+5, TileY+11)
			DrawT(TileX+10, TileY+11)
			DrawT(TileX+13, TileY+13)
			DrawT(TileX+8, TileY+14)

			context.fillRect((TileX+11)*size,(TileY+2)*size,1*size,1*size);
			context.fillRect((TileX+14)*size,(TileY+1)*size,1*size,1*size);
			context.fillRect((TileX+1)*size,(TileY+5)*size,1*size,1*size);
			context.fillRect((TileX+6)*size,(TileY+7)*size,1*size,1*size);
			context.fillRect((TileX+2)*size,(TileY+12)*size,1*size,1*size);
			context.fillRect((TileX+4)*size,(TileY+14)*size,1*size,1*size);
			context.fillRect((TileX+10)*size,(TileY+5)*size,1*size,1*size);
			context.fillRect((TileX+14)*size,(TileY+9)*size,1*size,1*size);


			function DrawT(TX, TY) {
				context.fillStyle="#EE481D";
				context.fillRect(TX*size,TY*size,2*size,1*size);
				context.fillStyle="#010341";
				context.fillRect((TX-1)*size,TY*size,1*size,1*size);
				context.fillRect(TX*size,(TY+1)*size,1*size,1*size);
			}
		}

		function DrawEmpty(EmptyX, EmptyY) {
			//Draw the landing Spots
			context.fillStyle="#010341";
			context.fillRect(EmptyX*size,EmptyY*size,16*size,16*size);
			
			//Draw the orange around the landing spot
			DrawEdge(EmptyX, EmptyY-16);

			context.fillStyle="#EE481D";
			context.fillRect((EmptyX-2)*size,(EmptyY-2)*size,2*size,16*size);
			context.fillRect((EmptyX+16)*size,(EmptyY-2)*size,2*size,16*size);

			context.fillStyle="#30DF29";
			context.fillRect((EmptyX+17)*size,(EmptyY+1)*size,1*size,1*size);
			context.fillRect((EmptyX+17)*size,(EmptyY+6)*size,1*size,1*size);
			context.fillRect((EmptyX+17)*size,(EmptyY+11)*size,1*size,1*size);
			context.fillRect((EmptyX+17)*size,(EmptyY+14)*size,1*size,1*size);
			context.fillRect((EmptyX-2)*size,(EmptyY+1)*size,1*size,1*size);
			context.fillRect((EmptyX-2)*size,(EmptyY+6)*size,1*size,1*size);
			context.fillRect((EmptyX-2)*size,(EmptyY+11)*size,1*size,1*size);
			context.fillRect((EmptyX-2)*size,(EmptyY+14)*size,1*size,1*size);

			context.fillStyle="#010341";
			context.fillRect((EmptyX-2)*size,(EmptyY+0)*size,1*size,1*size);
			context.fillRect((EmptyX-2)*size,(EmptyY+5)*size,1*size,1*size);
			context.fillRect((EmptyX-2)*size,(EmptyY+10)*size,1*size,1*size);
			context.fillRect((EmptyX-2)*size,(EmptyY+13)*size,1*size,1*size);
			context.fillRect((EmptyX-1)*size,(EmptyY+1)*size,1*size,1*size);
			context.fillRect((EmptyX-1)*size,(EmptyY+6)*size,1*size,1*size);
			context.fillRect((EmptyX-1)*size,(EmptyY+11)*size,1*size,1*size);
			context.fillRect((EmptyX-1)*size,(EmptyY+14)*size,1*size,1*size);
			context.fillRect((EmptyX-1)*size,(EmptyY-1)*size,1*size,1*size);
			context.fillRect((EmptyX-1)*size,(EmptyY+3)*size,1*size,2*size);
			context.fillRect((EmptyX-1)*size,(EmptyY+8)*size,1*size,2*size);

			context.fillRect((EmptyX+17)*size,(EmptyY+2)*size,1*size,1*size);
			context.fillRect((EmptyX+17)*size,(EmptyY+7)*size,1*size,1*size);
			context.fillRect((EmptyX+17)*size,(EmptyY+12)*size,1*size,1*size);
			context.fillRect((EmptyX+17)*size,(EmptyY+15)*size,1*size,1*size);
			context.fillRect((EmptyX+16)*size,(EmptyY+1)*size,1*size,1*size);
			context.fillRect((EmptyX+16)*size,(EmptyY+6)*size,1*size,1*size);
			context.fillRect((EmptyX+16)*size,(EmptyY+11)*size,1*size,1*size);
			context.fillRect((EmptyX+16)*size,(EmptyY+14)*size,1*size,1*size);
			context.fillRect((EmptyX+16)*size,(EmptyY-1)*size,1*size,1*size);
			context.fillRect((EmptyX+16)*size,(EmptyY+3)*size,1*size,2*size);
			context.fillRect((EmptyX+16)*size,(EmptyY+8)*size,1*size,2*size);
		}
	}









	function DrawPurple(PurpleX,PurpleY) {
		//Draw the purple tiles
		context.fillStyle="#9324F5";
		context.fillRect(PurpleX*size,PurpleY*size,16*size,16*size);

		DrawFlowers(PurpleX,PurpleY);
		DrawBlack(PurpleX,PurpleY);

		context.fillStyle="#FA0E1B";
		context.fillRect((PurpleX+8)*size,(PurpleY+5)*size,(1)*size,(3)*size);
		context.fillRect((PurpleX+8)*size,(PurpleY+10)*size,(1)*size,(3)*size);

		context.fillStyle="#000000";
		context.fillRect((PurpleX+8)*size,(PurpleY+11)*size,(1)*size,(1)*size);

		context.fillStyle="#1B22F3";
		context.fillRect((PurpleX+2)*size,(PurpleY+15)*size,(1)*size,(1)*size);

		function DrawBlack(BlackX, BlackY) {
			//Draw the black at the top and bottom
			context.fillStyle="#000000";

			context.fillRect((BlackX)*size,(BlackY)*size,(1)*size,(1)*size);
			context.fillRect((BlackX+2)*size,(BlackY)*size,(2)*size,(1)*size);
			context.fillRect((BlackX+6)*size,(BlackY)*size,(2)*size,(1)*size);
			context.fillRect((BlackX+9)*size,(BlackY)*size,(2)*size,(1)*size);
			context.fillRect((BlackX+9)*size,(BlackY+1)*size,(1)*size,(1)*size);
			context.fillRect((BlackX+13)*size,(BlackY)*size,(3)*size,(1)*size);

			context.fillRect((BlackX+5)*size,(BlackY+15)*size,(2)*size,(1)*size);
			context.fillRect((BlackX+8)*size,(BlackY+15)*size,(2)*size,(1)*size);
			context.fillRect((BlackX+11)*size,(BlackY+15)*size,(5)*size,(1)*size);
		}
		function DrawFlowers(FlowersX, FlowersY) {
			//Draw the flowers in the purple
			DrawFlower(FlowersX+2,FlowersY+3);
			DrawFlower(FlowersX+1,FlowersY+11);
			DrawFlower(FlowersX+3,FlowersY+7);
			DrawFlower(FlowersX+4,FlowersY+13);
			DrawFlower(FlowersX+7,FlowersY+3);
			DrawFlower(FlowersX+7,FlowersY+8);
			DrawFlower(FlowersX+8,FlowersY+12);
			DrawFlower(FlowersX+13,FlowersY+3);
			DrawFlower(FlowersX+10,FlowersY+6);
			DrawFlower(FlowersX+12,FlowersY+10);

			function DrawFlower(FlowerX,FlowerY) {
				//Draw a flower
				context.fillStyle="#1B22F3";
				context.fillRect((FlowerX-1)*size,(FlowerY)*size,(3)*size,(1)*size);
				context.fillRect((FlowerX)*size,(FlowerY-1)*size,(1)*size,(3)*size);
				context.fillStyle="#FA0E1B";
				context.fillRect((FlowerX)*size,(FlowerY)*size,(1)*size,(1)*size);
			}
		}
	}


}
