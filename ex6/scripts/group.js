import { GroupExpenses } from "../classes/GroupExpenses.js";
import { closeModal } from "../FormModal/index.js";

const table = document.getElementById("group-expenses");

const groupExpenses = [
  new GroupExpenses("Prime Video", 4, 20),
  new GroupExpenses("Festa", 10, 300),
  new GroupExpenses("Jantar", 4, 400)

];

closeModal();