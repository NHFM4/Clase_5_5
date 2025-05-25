// Declaracion de constantes Globales xd
const students = [];
const modify_ = document.getElementById("avg_");
const tableBody = document.querySelector("#studentsTable tbody");

document.getElementById("studentForm").addEventListener("submit", function (e){
e.preventDefault();
    
    // Obtencion de datos ingresados por el usuario
    const name = document.getElementById("name").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const grade = parseFloat(document.getElementById("grade").value);
    const date = document.getElementById("date").value.trim();

    if(!name || !lastName || isNaN(grade) || grade<1 || grade>7 || !date){
        alert("Error al ingresar Datos");
        return
    }

    // Creamos una var const con los datos ingresados por la persona
    const student = {name, lastName, grade, date};

    console.log(students)
    if (students.indexOf(student) > -1){
        console.log("xdxddd", students.indexOf(student))
    }

    // Se los agregamos al array principal
    students.push(student);

    // LLamamos a la funcion de contenido dinamico
    addStudentToTable(student);

    // Calculamos el promedio y mostramos en pantalla
    avg_prom();

    // Se limpia el formulario indexado xd
    this.reset();


});

// Funcion encargada de dar contenido dinamico dependiendo de la cantidad de alumnos
function addStudentToTable(student){

    // Se crea la variable almacenando el documento seleccionado
    const row = document.createElement("tr");
    
    let index_ = students.length;
    // Le agregamos contenido
    row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.lastName}</td>
    <td>${student.grade}</td>
    <td>${student.date}</td>
    <td> <button class="delete-btn" ${student.actions}">Eliminar</td>
    <td> <button class="mod" ${student.actions}">Modificar</td>
    `;

        row.querySelector(".delete-btn").addEventListener("click", function(){
            deleteEstudiante(student, row);
        });
        row.querySelector(".mod").addEventListener("click", function(){
            mod_est(student, row);
        });
        

    // Se le aplican los cambios y se agregan al html
    tableBody.appendChild(row);
}

// Funcion encargada de sacar el promedio de los students xd
function avg_prom(){
    let CANT_ST = students.length;

    if (!students){
        modify_.innerHTML = `Promedio de Calificaciones: ${total/CANT_ST}`;
        return
    }

    // Se declara la suma de todos los promedios en 0
    let total = 0;
    
    // Por cada estudiante se va sumando hasta dividirlo por la cantidad
    for (elem of students){
        total = total + elem.grade;
    }
    modify_.innerHTML = `Promedio de Calificaciones: ${total/CANT_ST}`;
}

function deleteEstudiante(elem, row){

    students.slice(elem, 1)
    avg_prom()
    console.log(students)
    row.remove()

}

function modify_tr(index) {

    // Obtener nuevos datos del formulario
    const name = document.getElementById("name").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const grade = parseFloat(document.getElementById("grade").value);
    const date = document.getElementById("date").value.trim();

    // Validación básica
    if (!name || !lastName || isNaN(grade) || grade < 1 || grade > 7 || !date) {
        alert("Error al modificar datos");
        return;
    }

    // Actualizar el objeto en el array
    students[index] = { name, lastName, grade, date };

    // Limpiar y volver a generar toda la tabla
    tableBody.innerHTML = "";
    students.forEach(addStudentToTable);

    // Volver a mostrar botón "Guardar Alumno"
    document.getElementById("save_dinamic").innerHTML = `<button type="submit" id="save_">Guardar Alumno</button>`;

    // Limpiar el formulario
    document.getElementById("studentForm").reset();

    // Recalcular promedio
    avg_prom();
}

function mod_est(student, row){
    let cant_ = students.indexOf(student)

    document.getElementById("name").value = students[cant_]["name"]
    document.getElementById("lastName").value = students[cant_]["lastName"]
    document.getElementById("grade").value = students[cant_]["grade"]
    document.getElementById("date").value = students[cant_]["date"]

    document.getElementById("save_dinamic").innerHTML = `<input type="button" class="bt_sv" onclick="modify_tr(${cant_})" value="Modificar Alumno">`;

}
