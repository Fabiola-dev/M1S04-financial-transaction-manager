export class GroupExpenses {
  title;
  partialValue;
  amount;
  #numberOfParticipants;

  constructor(title, numberOfParticipants, amount) {
    this.title = title;
    this.#numberOfParticipants = Number(numberOfParticipants);
    this.amount = Number(amount);
    this.partialValue = Number(amount / numberOfParticipants).toFixed(2);
  }
}
