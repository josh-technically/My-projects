const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

function transformTest(text) {
    console.log(text);
    result.textContent = text;
}

textarea.addEventListener('input', (e) => transformTest(e.target.value));


