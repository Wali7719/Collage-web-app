var SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;

   
    if (Content.toLowerCase() === "selfie") {
        speak();
    }
};

function speak() {
    var synth = window.speechSynthesis;

    function take_snapshot(img_id) {
        Webcam.snap(function(data_uri) {
            document.getElementById(img_id).innerHTML =
                "<img src='" + data_uri + "'>";
        });
    }

    var img_id = "selfie1";
    take_snapshot(img_id);
    var speak_data = "First capture will happen in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function() {
        img_id = "selfie2";
        take_snapshot(img_id);
        speak_data = "Second capture will happen in 5 seconds";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function() {
        img_id = "selfie3";
        take_snapshot(img_id);
        speak_data = "Third capture will happen in 5 seconds";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
}

Webcam.set({
    width: 640,
    height: 480,
    dest_width: 640,
    dest_height: 480,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#camera');
