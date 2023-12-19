
const btn = document.querySelector('.dice_border')
const dice_id = document.querySelector('.dice_id')
const adviceElement = document.getElementById('advice');

btn.addEventListener('click',()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceElement.textContent = `"${data.slip.advice}"`;
        dice_id.textContent = `# ${data.slip.id}`;
    })
    .catch(error => console.error('Error al obtener el consejo:', error));
})