
const textNormal = document.querySelector(".text-scaler__item--defualt")

const textMid = document.querySelector(".text-scaler__item--mid")

const textBig = document.querySelector(".text-scaler__item--big")

const content = document.querySelector(".about")

textNormal.addEventListener('click', (e) => {
content.classList.remove("text-scaler-mid")
content.classList.remove("text-scaler-big")
});
textMid.addEventListener('click', (e) => {
    content.classList.toggle("text-scaler-mid");
content.classList.remove("text-scaler-big")

    });
    textBig.addEventListener('click', (e) => {
        content.classList.remove("text-scaler-mid")
        content.classList.toggle("text-scaler-big");
        });