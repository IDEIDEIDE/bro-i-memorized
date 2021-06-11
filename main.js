Webcam.set({
    width: 250,
    height: 250,
    image_format: "png",
    png_quality: 90
})

webcam = document.getElementById("camera")

Webcam.attach(webcam)

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_image'src = "+ data_uri +">"
    })
}

console.log("ml5 verision", ml5.version)

classifier = ml5.imageClassifier("MobileNet", ModelLoaded)

function ModelLoaded(){
    console.log("Model Loaded!")
}
function check(){
    image = document.getElementById("captured_image")
    classifier.classify(image, gotResult)
}

function gotResult(error, result){
    if (error){
        console.log(error)
    }
    else{
        document.getElementById("object_name").innerHTML = result[0].label
    }
}