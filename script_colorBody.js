const bodyColor = document.body;
const colorRender = document.querySelector("#colorRender");


addEventListener('click', function(e) {
    let pageX = e.pageX;
    let pageY = e.pageY;
    
    const totX = innerWidth;
    const totY = innerHeight;
    
    const propX = ((pageX / totX) * 360).toPrecision(4);
    const propY = ((pageY / totY) * 100).toPrecision(4);

    bodyColor.style.backgroundColor = "hsl("+propX+", "+propY+"%, "+propY+"%)";
    bodyColor.style.transition = "background-color 0.8s ease";
    colorRender.innerHTML = "hsl("+propX+", "+propY+"%, "+propY+"%)";

})