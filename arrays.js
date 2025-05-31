1)const steps = ["one", "two", "three"];
const listTemplate = (step) => `<li>${step}</li>`;
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

2)const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  if (grade === "A") return 4;
  if (grade === "B") return 3;
  return 0;
}
const gpaPoints = grades.map(convertGradeToPoints);

3)const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

4)const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);

5)const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber); // returns 2



