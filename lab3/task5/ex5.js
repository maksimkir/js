const ex5 = (text) => {
    const vowels = "aeiouyаеєиіїоуюяAEIOUYАЕЄИІЇОУЮЯ";
    let count = 0;
    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(`Кількість голосних у рядку "${text}" = ${count}`);
};

ex5("Hello");