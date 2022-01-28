let count = 0;
let countEl = document.getElementById("count-id");

function increment() {
    count += 1;
    countEl.innerHTML = count;
};

let saveCountVar = [];
let saveEl = document.getElementById("save-id");

function saveCount() {
    saveCountVar.push(count);
    saveEl.innerHTML = saveCountVar;
};

function reset() {
    count = 0;
    saveCountVar = [];
    countEl.innerHTML = count;
    saveEl.innerHTML = saveCountVar;
}