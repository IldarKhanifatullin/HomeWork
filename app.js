const nameEl = document.getElementById('name')
const surnameEl = document.getElementById('surname')
const buttonEl = document.getElementById('button')
const formEl = document.getElementById('form')
const resultEl =document.getElementById('result')

formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
    const name = nameEl.value;
    const surname = surnameEl.value;
    const greeting = `Приветствую пользователь ${name} ${surname}`

    resultEl.textContent = greeting
})

// const object = {name: 'Ildar', surname: 'Khanifatullin', year: 30}
//
// console.log(object.name)

// const event = {
//     preventDefault: () => {
//         console.log('Дефолтное поведение отменено')
//     }
// }
// event.preventDefault()

