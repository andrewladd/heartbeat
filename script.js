$(document).ready(function () {
   
    function makeHeart() {
        var elem = document.getElementById('doodle'),
            heartObj = new Two({fullscreen: true}).appendTo(elem),

            position = new Two.Vector(heartObj.width / 2, heartObj.height / 2),

            //object placement
            heartLeft = heartObj.makeCircle(100,100, 48);
        heartLeft.fill = 'red';
        heartLeft.noStroke();

        var heartRight = heartObj.makeCircle(174,100, 48);
        heartRight.fill = 'red';
        heartRight.noStroke();

        var heartBottom = heartObj.makePolygon(137,215, 62.5,130, 211.5,130);
        heartBottom.fill = 'red';
        heartBottom.noStroke();

        heartObj.update();
    }
    
    makeHeart();
});