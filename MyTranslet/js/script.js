playbutton.onclick = function() {
  responsiveVoice.cancel();
  responsiveVoice.speak(document.getElementById('text').value, document.getElementById('voiceselection').value);
};
stopbutton.onclick = function() {
  responsiveVoice.cancel();
};


// function startDictation() {

//    if (window.hasOwnProperty('webkitSpeechRecognition')) {

//        var recognition = new webkitSpeechRecognition();
        
//        recognition.continuous = false;
//        recognition.interimResults = false;
        
//        recognition.lang = "en-US";
//        recognition.start();
        
//        recognition.onresult = function(e) {
//          document.getElementById('transcript').value
//                                   = e.results[0][0].transcript;
//          recognition.stop();
//          document.getElementById('labnol').submit();
//        };
        
//        recognition.onerror = function(e) {
//          recognition.stop();
//        }
//    }
// }