function calculateGrade() {
    let marks = Number(document.getElementById("marks").value);
    let grade;

    if (marks >= 90)
        grade = "A+";
    else if (marks >= 80)
        grade = "A";
    else if (marks >= 70)
        grade = "B";
    else if (marks >= 60)
        grade = "C";
    else if (marks >= 50)
        grade = "D";
    else
        grade = "F";

    document.getElementById("result").innerHTML =
        "Grade: " + grade;
}