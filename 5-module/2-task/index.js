function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let spoiler = document.querySelector('#text');
  button.addEventListener('click', () => {spoiler.hidden = !spoiler.hidden;});
}
