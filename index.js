let count = 0;
let countEl = document.getElementById("count-id");

function increment() {
    count += 1;
    countEl.textContent = count;
};

let saveCountVar = [];
let saveEl = document.getElementById("save-id");

function saveCount() {
    saveCountVar.push(count);
    saveEl.textContent = saveCountVar;
};

function reset() {
    count = 0;
    saveCountVar = [];
    countEl.textContent = count;
    saveEl.textContent = saveCountVar;
}