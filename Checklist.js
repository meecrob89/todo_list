class Checklist {
    constructor() {
        const memory = JSON.parse(localStorage.getItem("tasksInStorage"));
        if (memory) {
            this.checklistStore = memory;
        } else {
            this.checklistStore = [];
        }
        this.getTaskFromStorage();
    }

    makeNewTaskAndSave(taskName) {
        let task = new Task(taskName);
        this.checklistStore.push(task);
        localStorage.setItem("tasksInStorage", JSON.stringify(this.checklistStore));
    }

    getTaskFromStorage() {
        let TaskFromStorage = JSON.parse(localStorage.getItem("tasksInStorage"));
        
        for (let i = 0; i < this.checklistStore.length; i++) {

            let taskSpan = document.createElement("span");
            taskSpan.className = "taskSpan";
            //taskSpan.id = i + 1;

            let list = document.createElement("li");
            list.style.type = "square";
    
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = i;
            checkbox.addEventListener("change", () => {
                setTimeout(() => {
                    let tasks = (JSON.parse(localStorage.getItem("tasksInStorage")));
                    tasks.splice(checkbox.id, 1);
                    this.checklistStore = tasks;
                    localStorage.setItem("tasksInStorage", JSON.stringify(this.checklistStore));
                    console.log(document.getElementById("todo").childNodes)
                    while (document.getElementById("todo").childNodes.length) {
                        document.getElementById("todo").childNodes[0].remove();
                    }
                    this.getTaskFromStorage();
                }, 500);
            });

            let oneTask = TaskFromStorage[i].taskName;
            fieldWithTasks.appendChild(taskSpan);
            list.textContent = oneTask;
            list.style.fontSize = "25px";
            list.style.fontFamily = "Patrick Hand";
            taskSpan.appendChild(list);
            taskSpan.appendChild(checkbox);
        }
    }
}