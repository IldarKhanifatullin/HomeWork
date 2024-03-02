const dayEl = document.getElementById('day')
const monthEl = document.getElementById('month')
const buttonEl = document.getElementById('button')
const resultEl = document.getElementById('result')
const formEl = document.getElementById('form')

formEl.addEventListener('submit', (event) => {
    event.preventDefault()

    const day = dayEl.value
    const month = monthEl.value
resultEl.textContent = `Your zodiac sign is ${getZodiacSign(day, month)}`
})

function getZodiacSign(day, month) {
    switch (month) {
        case 'january':
            if (day >= 1 && day <= 20) {
                return 'Capricorn'
            } else if (day >= 21 && day <= 31) {
                return 'Aquarius'
            }
            break;
        case 'february':
            if (day >= 1 && day <= 20) {
                return 'Aquarius'
            } else if (day >= 21 && day <= 29) {
                return 'Pisces'
            }
            break;
        case 'march':
            if (day >= 1 && day <= 20) {
                return 'Pisces'
            } else if (day >= 21 && day <= 31) {
                return 'Aries'
            }
            break;
        case 'april':
            if (day >= 1 && day <= 20) {
                return 'Aries'
            } else if (day >= 21 && day <= 30) {
                return 'Taurus'
            }
            break;
        case 'may':
            if (day >= 1 && day <= 20) {
                return 'Taurus'
            } else if (day >= 21 && day <= 31) {
                return 'Gemini'
            }
            break;
        case 'june':
            if (day >= 1 && day <= 21) {
                return 'Gemini'
            } else if (day >= 22 && day <= 30) {
                return 'Cancer'
            }
            break;
        case 'july':
            if (day >= 1 && day <= 22) {
                return 'Cancer'
            } else if (day >= 23 && day <= 31) {
                return 'Leo'
            }
            break;
        case 'august':
            if (day >= 1 && day <= 23) {
                return 'Leo'
            } else if (day >= 24 && day <= 31) {
                return 'Virgo'
            }
            break;
        case 'september':
            if (day >= 1 && day <= 23) {
                return 'Virgo'
            } else if (day >= 24 && day <= 30) {
                return 'Libra'
            }
            break;
        case 'october':
            if (day >= 1 && day <= 23) {
                return 'Libra'
            } else if (day >= 24 && day <= 31) {
                return 'Scorpio'
            }
            break;
        case 'november':
            if (day >= 1 && day <= 22) {
                return 'Scorpio'
            } else if (day >= 23 && day <= 30) {
                return 'Sagittarius'
            }
            break;
        case 'december':
            if (day >= 1 && day <= 21) {
                return 'Sagittarius'
            } else if (day >= 22 && day <= 31) {
                return 'Capricorn'
            }
            break;
        default:
            return 'Unknown'
    }
}

asdasd