let TextArea = document.querySelector("textarea");
let Btn = document.querySelector("button");
let select = document.querySelector("select");
let langs = [];
let speech = new SpeechSynthesisUtterance();


window.speechSynthesis.onvoiceschanged = () => {

             //store the available voices in the browser 
    voices = window.speechSynthesis.getVoices(); 
                  

    speech.voice=voices[0];
                   //default voice 

    voices.forEach( (voice , i) => (select.options[i] = new Option(voice.name , i)));
                   //for each voice add its name and index
};

select.addEventListener("change" , () => {
    speech.voice = voices[select.value];
        //the voice will be selected by it's index in the select menu

})



Btn.addEventListener("click" , () => {

    speech.text = TextArea.value;
    window.speechSynthesis.speak(speech);
})