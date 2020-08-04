const input = document.querySelector('#input');
const btn = document.querySelector('button.btn');

btn.onclick = () => {
  input.select()
  document.execCommand('copy')
  alert('Copied!')
}
