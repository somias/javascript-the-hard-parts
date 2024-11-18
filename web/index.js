class Counter {
  constructor(score) {
    this.score = score;

    this.incrementButton = document.getElementById("increment");
    this.decrementButton = document.getElementById("decrement");

    this.incrementButton.addEventListener("click", () => {
      this.increment();
    });

    this.decrementButton.addEventListener("click", () => {
      this.decrement();
    });
  }

  increment() {
    console.log({ score: this.score });
    this.score++;
  }

  decrement() {
    console.log({ score: this.score });
    this.score--;
  }
}

const counter = new Counter(0);
