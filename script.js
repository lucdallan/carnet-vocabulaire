const pageInput = document.getElementById('page-input');
const pageSaveBtn = document.getElementById('page-save');
const pageDisplay = document.getElementById('page-display');

const wordInput = document.getElementById('word-input');
const defInput = document.getElementById('def-input');
const wordSaveBtn = document.getElementById('word-save');
const wordList = document.getElementById('word-list');
const wordCount = document.getElementById('word-count');

// Page title
pageSaveBtn.addEventListener('click', function() {
    const page = pageInput.value;
    pageDisplay.textContent = page;
});

// Add word
wordSaveBtn.addEventListener('click', function() {
    const mot = wordInput.value;
    const def = defInput.value;

    if (mot === '' || def === '') {
        return;
    }

    const wordElement = document.createElement('p');
    wordElement.textContent = mot + ' : ' + def;
    wordList.appendChild(wordElement);

    wordInput.value = '';
    defInput.value = '';

    wordCount.textContent = wordList.children.length;
});
