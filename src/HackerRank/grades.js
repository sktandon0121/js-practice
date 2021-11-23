function gradingStudents(grades) {
    // Write your code here
    let len = grades.length - 1
    if (len > 0) {
        for (let i = 0; i <= len; i++) {
            console.log(applyRules(grades[i]))
        }
    } else {
        return grades
    }
}

function applyRules(grade) {
    if (grade >= 38) {
        let nextMultiple = parseInt(grade / 5) * 5 + 5
        let diff = nextMultiple - grade
        if (diff < 3) {
            if (nextMultiple <= 100) {
                grade = nextMultiple
            } else {
                grade = 100
            }
        }

        return grade
    } else {
        return grade
    }
}

gradingStudents([73, 67, 38, 33])