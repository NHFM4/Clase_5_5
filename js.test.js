const students_ = []
const table_ = document.querySelector("#table_ tbody")

document.getElementById("student_form").addEventListener("submit", function (e){
    e.preventDefault()

    const name_ = document.getElementById("name").value.trim()
    const lname_ = document.getElementById("lastname").value.trim()
    const scores_ = parseFloat(document.getElementById("score").value)

    if (!scores_ || !name_ || !lname_ || isNaN(scores_) || scores_ < 1 || scores_ > 7){
        alert("Rellena todos los campos =>> [ERROR]")
        return
    }

    const obj_st_ = {name_, lname_, scores_}
    students_.push(obj_st_)

    addStudenTable(obj_st_)
    console.log(students_)

})

function addStudenTable(obj_st_){

    const row = document.createElement("tr")
    row.innerHTML = `
    <td>${obj_st_.name_}
    <td>${obj_st_.lname_}
    <td>${obj_st_.scores_}` 
    
    table_.appendChild(row)


}