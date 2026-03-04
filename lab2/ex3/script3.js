//оцінювання
function transferGradeToTextShort(grade) {
    if (isNaN(grade) || grade === 0 && document.getElementById('gradeInput').value === "") return "Порожньо";
    return (grade >= 90 && grade <= 100) ? "Відмінно" :
           (grade >= 75 && grade < 90) ? "Добре" :
           (grade >= 60 && grade < 75) ? "Задовільно" :
           (grade >= 0 && grade < 60) ? "Незадовільно" : "Невірна оцінка";
}

//сезони
function transferSeasonToText(month) {
    return (month >= 1 && month <= 2 || month === 12) ? "Зима" :
           (month >= 3 && month <= 5)                 ? "Весна" :
           (month >= 6 && month <= 8)                 ? "Літо" :
           (month >= 9 && month <= 11)                ? "Осінь" : 
           "Невірний місяць";
}

//вивід
function handleGrade() {
    let inputElement = document.getElementById('gradeInput');
    let val = Number(inputElement.value);
    let result = transferGradeToTextShort(val);

    document.getElementById('gradeOut').innerText = "Результат: " + result;
 
    console.log("--- Перевірка оцінки ---");
    console.log("Введено бал:", val);
    console.log("Результат:", result);
}

function handleSeason() {
    let inputElement = document.getElementById('monthInput');
    let val = Number(inputElement.value);
    let result = transferSeasonToText(val);

    document.getElementById('seasonOut').innerText = "Сезон: " + result;
    
    console.log("--- Перевірка сезону ---");
    console.log("Введено місяць:", val);
    console.log("Визначено як:", result);
}