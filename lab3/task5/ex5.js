const countVowels = (text) => {
    const vowels = "aeiouyаеєиіїоуюяAEIOUYАЕЄИІЇОУЮЯ";
    let count = 0;
    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

const result = countVowels("Hello");
console.log(`Кількість голосних у рядку "Hello" = ${result}`);
