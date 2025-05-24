let btn = document.querySelector('#btn')
let content = document.querySelector('#content')
let voice= document.querySelector('#voice')


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-gb"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon")
    }
    else{
        speak("Good Evening")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition=  window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir, what can i help you ?")
    }
    else if(message.includes("who are you")){
        speak("I am Virtual assistant, created by Ranjan Sir")
    }
    else if(message.includes("how are you")){
        speak("I am fine sir, what about you ?")
    }
    else if(message.includes("fine")){
        speak("That's great")
    }
    else if(message.includes("open google")){
        speak("Opening Google")
        window.open("https://google.com/")
    }
    else if(message.includes("open my youtybe channel")){
        speak("Opening Youtube Channel")
        window.open("http://www.youtube.com/@ranjanmishravlogs82")
    }
    else if(message.includes("open youtube")){
        speak("Opening Youtube")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("Opening Facebook")
        window.open("https://facebook.com/")
    }
    else if(message.includes("open instagram")){
        speak("Opening Instagram")
        window.open("https://instagram.com/")
    }
    else if(message.includes("open whatsapp")){
        speak("Opening Whatsapp")
        window.open("https://whatsapp.com/")
    }
    else if(message.includes("open twitter")){
        speak("Opening Twitter")
        window.open("https://twitter.com/")
    }
    else if(message.includes("open linkedin")){
        speak("Opening Linkedin")
        window.open("https://www.linkedin.com/")
    }
    else if(message.includes("open amazon")){
        speak("Opening Amazon")
        window.open("https://www.amazon.in/")
    }
    else if(message.includes("open flipkart")){
        speak("Opening Flipkart")
        window.open("https://www.flipkart.com/")
    }
    else if(message.includes("open myntra")){
        speak("Opening Myntra")
        window.open("https://www.myntra.com/")
    }
    else if(message.includes("open netflix")){
        speak("Opening Netflix")
        window.open("https://www.netflix.com/")
    }
    else if(message.includes("open hotstar")){
        speak("Opening Hotstar")
        window.open("https://www.hotstar.com/")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleTimeString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
            let time=new Date().toLocaleTimeString(undefined,{day:"numeric",month:"numeric"})
            speak(time)
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shifra","") || message.replace("shipra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`, "_blank")
    }
}
