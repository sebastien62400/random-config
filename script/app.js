const configs = (["Config 1", "Config 2", "Config 3", "Config 4", "Config 5", "Config 6", "Config 7"]);

// *****************************************************************************
const generate = document.querySelector(".button");
const result_e = document.getElementById("result-e");
const result_v = document.getElementById("result-v");
const result_s = document.getElementById("result-s");
const message  = document.querySelector('.message');
const refresh  = document.querySelector('.refresh');
const buttonTitleChanger = document.getElementById('button-changer-title');
const titlePage = document.querySelector('title');
const inputTitle = document.getElementById('text-title-change');
const etienne = document.getElementById('etienne');
const valentin = document.getElementById('valentin');
const sebastien = document.getElementById('sebastien');
const stopSpeak = document.querySelector('.stop-speak');
const refreshed_message = document.querySelector('.refreshed-message');
// *****************************************************************************


generate && generate.addEventListener("click", () => {
    const random_e = configs[(Math.random() * configs.length) | 0];
    const random_v = configs[(Math.random() * configs.length) | 0];
    const random_s = configs[(Math.random() * configs.length) | 0];
    result_e.innerText = random_e;
    result_v.innerText = random_v;
    result_s.innerText = random_s;

    // voice on generate

    // Take names for the voice

    let etienne_voice   = etienne.textContent;
    let valentin_voice  = valentin.textContent;
    let sebastien_voice = sebastien.textContent;

    // Take what config is using ( choosen randomly )
    let etienne_config = result_e.textContent;
    let valentin_config = result_v.textContent;
    let sebastien_config = result_s.textContent;

    // Start the voice
    let speech_e_voice = new SpeechSynthesisUtterance(etienne_voice);
    let speech_e_config = new SpeechSynthesisUtterance(etienne_config);
    speechSynthesis.speak(speech_e_voice);
    speechSynthesis.speak(speech_e_config);

    let speech_v_voice = new SpeechSynthesisUtterance(valentin_voice);
    let speech_v_config = new SpeechSynthesisUtterance(valentin_config);
    speechSynthesis.speak(speech_v_voice);
    speechSynthesis.speak(speech_v_config);

    let speech_s_voice = new SpeechSynthesisUtterance(sebastien_voice);
    let speech_s_config = new SpeechSynthesisUtterance(sebastien_config);
    speechSynthesis.speak(speech_s_voice);
    speechSynthesis.speak(speech_s_config);

});

refresh && refresh.addEventListener('click', () => {

    setTimeout(() => {
        refreshed_message.style.bottom = "-100px";
    }, 1500);
    refreshed_message.style.bottom = "0";
    refreshed_message.style.bottom = "0";
    result_e.innerText = "Config";
    result_v.innerText = "Config";
    result_s.innerText = "Config";


    // Stop vocal on refresh results
    speechSynthesis.cancel();
});

stopSpeak && stopSpeak.addEventListener('click', () => {
    speechSynthesis.cancel();
});

buttonTitleChanger && buttonTitleChanger.addEventListener('click', () => {
    titlePage.textContent = inputTitle.value;

    if(inputTitle.value === "!reset") {
        titlePage.textContent = "Random Config";
    }
    inputTitle.value = "";
});