class Hints {
  constructor() {
    this.list = document.querySelector('#datalist');
  }

  showHints(hints) {
    hints.forEach(pods => {
      const hint = `<option value="${pods.title}">`
      this.list.innerHTML += hint;
    });
  }
}