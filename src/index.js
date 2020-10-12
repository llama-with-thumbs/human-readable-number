module.exports = function toReadable (number) {
        if (number < 20) return cardianl(number)
        if (number < 100) return hyphen(number)
        if (number < 1000) return hundred(number)
        if (number < 1000000) return thousand(number)
}
function cardianl(number) {
    switch (number) {
        case 0:
            return 'zero'
        case 1:
            return 'one'
        case 2:
            return 'two'
        case 3:
            return 'three'
        case 4:
            return 'four'
        case 5:
            return 'five'
        case 6:
            return 'six'
        case 7:
            return 'seven'
        case 8:
            return 'eight'
        case 9:
            return 'nine'
        case 10:
            return 'ten'
        case 11:
            return 'eleven'
        case 12:
            return 'twelve'
        case 13:
            return 'thirteen'
        case 14:
            return 'fourteen'
        case 15:
            return 'fifteen'
        case 16:
            return 'sixteen'
        case 17:
            return 'seventeen'
        case 18:
            return 'eighteen'
        case 19:
            return 'nineteen'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        default:
            break
    }
}
function decades(number) {
    switch (number) {
        case 20:
            return 'twenty'
        case 30:
            return 'thirty'
        case 40:
            return 'forty'
        case 50:
            return 'fifty'
        case 60:
            return 'sixty'
        case 70:
            return 'seventy'
        case 80:
            return 'eighty'
        case 90:
            return 'ninety'
        default:
            break
    }
}
function hyphen(number) {
    if (number < 20) {
        return cardianl(number)
    } else if (number % 10 === 0) {
        return decades(number)
    } else {
        return decades(number - (number % 10)) + ' ' + cardianl(number % 10)
    }
}
function hundred(number) {
    if (number % 100 === 0) {
        return cardianl(number / 100) + ' hundred'
    } else {
        return hyphen((number - (number % 100)) / 100) + ' hundred ' + hyphen(number % 100)
    }
}
function thousand(number) {
    if (number % 1000 === 0) {
        return hundred(number / 1000) + ' thousand'
    } else {
        return hundred((number - (number % 1000)) / 1000) + ' thousand ' + hundred(number % 1000)
    }
}
