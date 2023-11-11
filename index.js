document.addEventListener("DOMContentLoaded", () => fetchData);

function fetchData() {
    fetch('file:///Users/karinapliego/Development/code/phase-1/project-1/index.html')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
}
console.log(fetchData);

//initial expenses for example -- might delete later
let expenseEntries = [
    {
        expense: "rent", 
        amount: 1000
    },
    {
        expense: "groceries",
        amount: 100
    }
];

//add new expenses
function addExpense() {
    let expense = document.getElementById("expense-memo");
    let amount = document.getElementById("amount");

    //error test -- add later
    // test using if statement -- ensure data type is correct, actual number, not negative,
    //there's an entry for both input boxes

    //push data onto existing table -- should I be using push with a string?
    expenseEntries.push({
            expense: expense, 
            amount: amount
    });
}