function rodaODado() {
    let dado = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#dado').textContent = dado;
}