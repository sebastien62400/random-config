const configs = (["Config 1", "Config 2", "Config 3", "Config 4", "Config 5", "Config 6", "Config 7"]);

const generate = document.querySelector(".button");
const result_e = document.getElementById("result-e");
const result_v = document.getElementById("result-v");
const result_s = document.getElementById("result-s");
const message  = document.querySelector('.message');
const refresh  = document.querySelector('.refresh');
const buttonTitleChanger = document.getElementById('button-changer-title');
const titlePage = document.querySelector('title');
const inputTitle = document.getElementById('text-title-change');


generate && generate.addEventListener("click", () => {
    const random_e = configs[(Math.random() * configs.length) | 0];
    const random_v = configs[(Math.random() * configs.length) | 0];
    const random_s = configs[(Math.random() * configs.length) | 0];
    result_e.innerText = random_e;
    result_v.innerText = random_v;
    result_s.innerText = random_s;
});

refresh && refresh.addEventListener('click', () => {
    result_e.innerText = "Refreshed !";
    result_v.innerText = "Refreshed !";
    result_s.innerText = "Refreshed !";
    setTimeout(() => {
        result_e.innerText = "Config";
        result_v.innerText = "Config";
        result_s.innerText = "Config";
    }, 0500)
});

buttonTitleChanger && buttonTitleChanger.addEventListener('click', () => {
    titlePage.textContent = inputTitle.value;
});