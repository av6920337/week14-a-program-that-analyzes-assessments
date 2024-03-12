const grades=[];
// Заполнение массива grades случайными оценками от 1 до 100 для 12 студентов
for(i=0; i<12; i++){
    grades.push(Math.floor(Math.random()*100)+1);
}
console.log(grades);
// Рассчет и вывод среднего балла студентов
const averageGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
console.log('Средний балл студентов:', averageGrade);
// Поиск и вывод максимального балла
const maxGrade = Math.max(...grades);
console.log('Максимальный балл:',maxGrade);
// Поиск и вывод минимального балла
const minGrade = Math.min(...grades);
console.log('Минимальный балл:',minGrade);
// Подсчет и вывод количества студентов с положительной оценкой (балл выше или равен 60)
const positiveGradesCount=grades.filter((grades)=>grades>=60);
console.log('Количество студентов с положительной оценкой:', positiveGradesCount);
// Подсчет и вывод количества студентов с отрицательной оценкой (балл ниже 60)
const negativeGradesCount=grades.filter((grades)=>grades<60);
console.log('Количество студентов с отрицательной оценкой:', negativeGradesCount);
// Преобразование числовых оценок в буквенные оценки
const letterGrades = grades.map(grade => {
    if (grade >= 80) {
        return 'A';
    } else if (grade >= 60) {
        return 'B';
    } else if (grade >= 40) {
        return 'C';
    } else if (grade >= 20) {
        return 'D';
    } else {
        return 'E';
    }
});

console.log('Буквенные оценки:', letterGrades);