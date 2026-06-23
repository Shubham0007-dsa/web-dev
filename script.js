const form = document.getElementById("transactionForm");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const type = document.getElementById("type");

const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");
const transactionList = document.getElementById("transactionList");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function saveData() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function updateUI() {

    transactionList.innerHTML = "";

    let income = 0;
    let expense = 0;

    transactions.forEach((transaction, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${transaction.description} - ₹${transaction.amount}
            <button class="delete-btn" onclick="deleteTransaction(${index})">
                Delete
            </button>
        `;

        transactionList.appendChild(li);

        if(transaction.type === "income"){
            income += transaction.amount;
        }else{
            expense += transaction.amount;
        }
    });

    incomeEl.textContent = `₹${income}`;
    expenseEl.textContent = `₹${expense}`;
    balanceEl.textContent = `₹${income - expense}`;

    saveData();
}

form.addEventListener("submit", function(e){

    e.preventDefault();

    const transaction = {
        description: description.value,
        amount: Number(amount.value),
        type: type.value
    };

    transactions.push(transaction);

    description.value = "";
    amount.value = "";

    updateUI();
});

function deleteTransaction(index){
    transactions.splice(index,1);
    updateUI();
}

updateUI();