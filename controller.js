const submit = document.getElementById("submit");
const input = document.getElementById("input");
const fieldWithTasks = document.getElementById("todo");

let checklist = new Checklist();

submit.onclick = function() {
    checklist.makeNewTaskAndSave(input.value);
    checklist.getTaskFromStorage();
}