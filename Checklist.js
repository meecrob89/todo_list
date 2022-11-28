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
            let span = document.createElement("span");
            span.className = "span";
            span.id = i;
            console.log(span.id);

            let li = document.createElement("li");
            li.style.type = "square";
    
            let done = document.createElement("input");
            done.type = "checkbox";
            done.addEventListener("change", () => {
                setTimeout(() => {
                    done.parentElement.remove();
                }, 800);
            });

            let oneTask = TaskFromStorage[i].taskName;
            fieldWithTasks.appendChild(span);
            li.textContent = oneTask;
            li.style.fontSize = "25px";
            li.style.fontFamily = "Patrick Hand";
            span.appendChild(li);
            span.appendChild(done);
        }
    }
}