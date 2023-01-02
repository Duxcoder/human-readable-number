module.exports = function toReadable (number) {
    const numbersFirst = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    const numbersSecond = ['thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbersDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const lowThirteen = (num) => {
        return number === 0 ? 'zero' : numbersFirst[num];
    }
    const thirteenNineteen = (num) => {
        return numbersSecond[num - 13]
    }
    const dozens = (num) => {
        return num ? `${numbersDozens[Math.floor(num / 10)]}${num % 10 ? ' ' + switcher(num % 10) : ''}` : ''
    }
    const hundreds = (num) => {
        return `${lowThirteen(Math.floor(num / 100))} hundred${num % 100 ? ' ' + switcher(num % 100) : ''}`
    }
    const thousands = (num) => {
        return `${lowThirteen(Math.floor(num / 1000))} thousand${num % 1000 ? ' ' + switcher(num % 1000) : ''}`
    }
    const switcher = (num) => {
        switch (true) {
            case (num / 12 <= 1): return lowThirteen(num);
            case (num >= 13 && num < 20): return thirteenNineteen(num);
            case (num >= 20 && num < 100): return dozens(num);
            case (num >= 100 && num < 1000): return hundreds(num);
            case (num >= 1000 && num < 10000): return thousands(num);
            default: return 'Invalid value'
        }
    }
    return switcher(number)
}
