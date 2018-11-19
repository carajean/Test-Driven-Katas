const wrap = (line, maxLen) => {
    if (maxLen > line.length) {
        return line;
    } else {
        // let counter = 0;
        // const words = line.split(' ');
        // const idxFinalLetter = words.map((word, i) => {
        //     if (word !== words[words.length - 1]) {
        //         counter += word.length;
        //     } else {
        //         counter += word.length;
        //     }
        //     console.log(counter, word);
        //     if (maxLen <= counter) {
        //         counter = 0;
        //         return '\n' + word;
        //     } else {
        //         return word;
        //     }
        // });

        const words = line.split(' ');
        let combo = '';
        let result = '';
        for (let i = 0; i < words.length; i++) {
            combo += words[i] + ' ';
            if (combo.length < maxLen) {
                result += combo;
            } else {
                combo = '';
                result += '\n' + words[i] + ' ';
            }
        }
        return result.trim();
    }
};

console.log(wrap("puppies are cute, playful, and fluffy", 10));

module.exports = wrap;
