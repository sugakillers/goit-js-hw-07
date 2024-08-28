const nameEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


function updateName() {

    const trimmedValue = nameEl.value.trim();

    if (trimmedValue) {
    spanEl.textContent = trimmedValue;
    } else {
    spanEl.textContent = 'Anonymous';
    }
}



nameEl.addEventListener('input', updateName);

nameEl.style.width = "360px";
nameEl.style.height = "40px";