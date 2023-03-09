import { GroupExpenses } from "../classes/GroupExpenses.js";
import { closeModal } from "../FormModal/index.js";

const table = document.getElementById("group-expenses");

//Adicionando caminho para onde adicionar os elementos
const el_title = document.getElementById('title-input');
const el_participants = document.getElementById('participants-input');
const el_amount = document.getElementById('amount-input');

const groupExpenses = [
 /*  new GroupExpenses("Prime Video", 4, 20),
  new GroupExpenses("Festa", 10, 300),
  new GroupExpenses("Jantar", 4, 400)
 */
];

//updatePage();

function updatePage () {
  groupExpenses.map((expense) => {
    table.insertAdjacentHTML(
      "beforeend",
      `
      <div class="row">
			<div>${expense.title}</div>
			<div>R${expense.partialValue}</div>
			<div>R$ ${expense.amount}</div>
		</div>
      `
    );
  });
};

window.addGroupExpense = () => {
  groupExpenses.push(
    new GroupExpenses(
      el_title.value,
      el_participants.value,
      el_amount.value
    )
  );

  alert('Despesa adicionada com sucesso!');

  updatePage();

  el_title.value = "";
  el_participants.value = "";
  el_amount.value = "";
  
  closeModal();
}

