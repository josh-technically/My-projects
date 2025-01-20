const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

function transformTest(text) {
    // take text, turn it into an array, loop, then filter.
    const mod = Array.from(text).map(filters.sarcastic);
    console.log(mod);
    result.textContent = text;
}

const filters = {
    sarcastic(letter, index) {
        console.log(letter, index); // check and delete
        return letter;
    },
    funky() {},
    unable() {},
};

textarea.addEventListener('input', (e) => transformTest(e.target.value));
