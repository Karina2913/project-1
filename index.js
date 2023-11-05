document.addEventListener("DOMContentLoaded", () => fetchData);

function fetchData() {
    fetch('file:///Users/karinapliego/Development/code/phase-1/project-1/index.html')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
}
console.log(fetchData);
