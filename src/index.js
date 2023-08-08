const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let array = [];
    const arrayWithoutZero = [];
    const result = [];

    for (let i = 0; i < expr.length; i+=10) {
        array.push(expr.slice(i, i + 10));
    }
    array.forEach(item => item==='**********' ? arrayWithoutZero.push('*') : arrayWithoutZero.push(item.match(/(((10)|(11))+)/)[0]))

    array = [];   // empty array for array with morse symbols
    arrayWithoutZero.forEach(item => {
        array.push(item.replace(/(10)/g, '.').replace(/(11)/g, '-'));
    })

    array.forEach(item => typeof(MORSE_TABLE[item]) == 'undefined' ? result.push(' ') : result.push(MORSE_TABLE[item]))
    return result.join('');
}

module.exports = {
    decode
}