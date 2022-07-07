function nameShuffler(str) {
    let fn = '', ln = '', mode = 'fn';
    for (let i = 0; i < str.length; i++){
        if (str[i] === ' ') {
            mode = 'ln';
            continue;
        }
    if (mode === 'fn') {
        fn += str[i];
    } else {
        ln += str[i];
    }
}

return `${ln} ${fn}`;
}
console.log(nameShuffler('Arielle Dombasle'))
