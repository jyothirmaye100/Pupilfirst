let c = document.getElementById("mycanvas");
let ctx = c.getContext("2d");
let drawline=(startX,startY,endX,endY)=>{
    ctx.begin.path();
    ctx.moveTO(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
};
let drawCircle={
    centerX,
    centerY,
    radius,
    startingAngle,
    endingAngle,
    color
}=> {
    ctx.beginPath();
    ctx.arc(centerX,centerY,radius,startingAngle,endingAngle);
    ctx.fillStyle=color;
    ctx.fill();
    ctx.stroke();

}
//head
drawCircle(250,150,0,2*Math.PI,"transparent");
//eyes
let drawEyes=(radius,color)=>{
    //leftEye
    drawCircle(300,radius,0,2*Math.PI,color);
    //righteye
    drawCircle(300,radius,0,2*Math.PI,color);
};
//mouth
let drawMouth=(expression)=>{
    if(expression==='suprise'){
        drawCircle(250,325,0,2*Math.PI,"transparent");
    }else if(expression==="happy"){
        drawCircle(250,325,0,2*Math.PI,"transparent");
    }else(expression==="flat"){
        drawLine(200,325,300,325);
    }
};
let getRndInteger=(min,max)=>{
    let eyeRadius=getRndInteger(1,20);
    let eyeColor=["brown","blue","green"][getRndInteger(0,2)];
    let noseType=["crooked","button"][getRndInteger(0,1)];
    let expression=["suprise","happy","flat"][getRndInteger(0.,2)];
    drawEyes(eyeRadius,eyeColor);
    drawNose(crooked);
    drawMouth(flat);
        
};
drawRandomFace();

