const students=[]
const tableBody=document.querySelector("#studentsTable tbody")
document.getElementById("studentForm").addEventListener("submit",function (e){
e.preventDefault();
 
 const name=document.getElementById("name").value.trim();
 const lastName=document.getElementById("lastName").value.trim();
 const grade=parseFloat(document.getElementById("grade").value);
 const date=document.getElementById("date").value.trim();

 if(!name || !lastName || isNaN(grade) || grade<1 || grade>7 || !date){
    alert("Error al ingresar Datos")
    return
 }

 const student={name,lastName,grade,date};

 students.push(student);
 //console.log(students)
addStudentToTable(student)
 this.reset()


});

function addStudentToTable(student){
    const row=document.createElement("tr");
    row.innerHTML=`
      <td>${student.name}</td>
       <td>${student.lastName}</td>
       <td>${student.grade}</td>
       <td>${student.date}</td>`;
     tableBody.appendChild(row);
       }