let student = [
    { name: "Smith", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "John", rollNumber: 16, marks: 35 },
    { name: "Tiger", rollNumber: 7, marks: 55 }
];

//Print total marks for students with marks greater than 60
//After 20 marks have been added to those who scored less than 60

const totalMarks = student.map((stu)=> 
  stu.marks<60 ? {...stu, marks: stu.marks+20} : stu
)
.filter((stu) => stu.marks>60)
.reduce((sum,stu) => sum+=stu.marks, 0);

console.log(totalMarks);
