document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateGrade();
});

function calculateGrade() {

    const name = document.getElementById('name').value;
    const score1 = parseFloat(document.getElementById('quiz1').value);
    const score2 = parseFloat(document.getElementById('quiz2').value);
    const score3 = parseFloat(document.getElementById('quiz3').value);
   
    if ([score1, score2, score3].some(score => isNaN(score) || score < 0 || score > 100)) {
        alert('Error: Numbers must be between 0 and 100.');
        return;
    }

    const averageScore = (score1 + score2 + score3) / 3;
    
    let letterGrade;
    if (averageScore >= 90) {
        letterGrade = 'A';
    } else if (averageScore >= 80) {
        letterGrade = 'B';
    } else if (averageScore >= 70) {
        letterGrade = 'C';
    } else if (averageScore >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    
    document.getElementById('result').innerHTML = `Student Name: ${name} 
    <p>Average score: ${averageScore.toFixed(2)}</p> 
    <p>Letter grade: ${letterGrade}</p>`; 
}