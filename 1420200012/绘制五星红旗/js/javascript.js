window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var width = canvas.width;
    var height = width * 2 / 3;
    context.fillStyle = "red";
    context.fillRect(0, 0, width, height);
    //大五星的半径
    var maxR = 0.15,
        //小五星的半径
        minR = 0.05;
    //大五星的位置 
    var maxX = 0.25,
        maxY = 0.25;
    //小五星位置
    var minX = [0.50, 0.60, 0.60, 0.50];
    var minY = [0.10, 0.20, 0.35, 0.45];
    // 画大星星
    var ox = height * maxX,
        oy = height * maxY;
    create5star(context, ox, oy, height * maxR, "#ff0", 0);
    // 画小星星  
    for (var idx = 0; idx < 4; idx++) {
        var sx = minX[idx] * height,
            sy = minY[idx] * height;
        var theta = Math.atan((oy - sy) / (ox - sx));
        create5star(context, sx, sy, height * minR, "#ff0", -Math.PI / 2 + theta);
    }
    /*绘制五角星，创建一个五角星形状。该五角星的中心坐标为(sx,sy),中心到顶点的距离为radius,rotate=0时一个顶点在对称轴上   
     rotate:绕对称轴旋转rotate弧度*/
    function create5star(context, sx, sy, radius, color, rotato) {
        context.save();
        context.fillStyle = color;
        context.translate(sx, sy); //移动坐标原点   
        context.rotate(Math.PI + rotato); //旋转   
        context.beginPath(); //创建路径   
        var x = Math.sin(0);
        var y = Math.cos(0);
        var dig = Math.PI / 5 * 4;
        for (var i = 0; i < 5; i++) { //画五角星的五条边   
            var x = Math.sin(i * dig);
            var y = Math.cos(i * dig);
            context.lineTo(x * radius, y * radius);
        }
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();
    }
}
