import { useContext } from "react";
import "../css/task-panel.css";
import Task from "./Task";
import { ActiveTabContext } from "../contexts/ActiveTabContext";

type TaskProps = {
  title: string,
  description: string,
  dueDate: string,
  completed: boolean,
  tags?: string[]
};

function TaskPanel() {

  const { activeTab } = useContext(ActiveTabContext);
  const titleArr = ["Today", "Upcoming", "Filter & Tags", "Completed"];

  const data = JSON.parse(localStorage.getItem("data")!);
  const tasksArr: TaskProps[] = data.tasks;
  const currentDate = new Date().setHours(0, 0, 0, 0);

  function filterTasks(tasksArr: TaskProps[], activeTab: number): TaskProps[] {
      switch (activeTab) {
        case 1:
        return tasksArr.filter(task => new Date(task.dueDate).setHours(0, 0, 0, 0) == currentDate);
        case 2:
          return tasksArr.filter(task => new Date(task.dueDate).setHours(0, 0, 0, 0) > currentDate);
        case 3:
          return tasksArr;
        case 4:
          return tasksArr.filter(task => task.completed == true);
        default:
          return tasksArr;
    }
  }

  const filteredTasks: TaskProps[] = filterTasks(tasksArr, activeTab);

  return(
    <div id="task-panel" className="mt-4 me-4">
      <div className="mb-4">
        <h4><b>{titleArr[activeTab - 1]}</b></h4>
        <p style={{ color: "grey" }}>
          <i className="bi bi-check2-circle"></i>
          &ensp;{filteredTasks.length} {filteredTasks.length < 2 ? "task" : "tasks" }
        </p>
      </div>
      {
        filteredTasks.map((task, index) => (
          <Task
            key={index}
            title={task.title}
            description={task.description}
            dueDate={new Date(task.dueDate).toLocaleDateString()}
            completed={task.completed}
          />
        ))
      }
    </div>
  );
}

export default TaskPanel;