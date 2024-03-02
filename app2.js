const gasolineEl = document.getElementById('gasoline')
const wayEl = document.getElementById('way')
const resultEl = document.getElementById('result')
const buttonEl = document.getElementById('button')
const formEl = document.getElementById('form')

formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)

    const gasoline = gasolineEl.value
    const way = wayEl.value
    resultEl.textContent = `Средний расход топлива на 100 км = ${getAvgConsumption (gasoline, way)} л`
})

function getAvgConsumption (gasoline, way) {
    return (gasoline / way) * 100
}


//
// buttonEl.addEventListener('click', () => {
//     const gasoline = gasolineEl.value
//     const way = wayEl.value
//     resultEl.textContent = getAvgConsumption (gasoline, way)
// })
//
// function getAvgConsumption (gasoline, way) {
//     return (gasoline / way) * 100
// }
