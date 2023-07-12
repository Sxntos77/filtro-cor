function setup(){
    canvas = createCanvas(640,480)
    canvas.position(300,300)
    video = createCapture(VIDEO)
    video.hide()
    cor = ""
}

function draw(){
    image(video ,0,0,640,480)
    tint(cor)
}

function filtro(){
    cor = document.getElementById("cor").value
}

function foto(){
    save("foto.png")
}