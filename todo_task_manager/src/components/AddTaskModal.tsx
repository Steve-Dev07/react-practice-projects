import { useState } from "react";

function AddTaskModal() {

  const [taskNameInput, setTaskNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  function validateInputs(...inputs: string[]): boolean {
    let areValidInputs = true;
    inputs.forEach(input => {
      if (input == "" || input == null || input == undefined) {
        areValidInputs = false;
      }
    });

    return areValidInputs;
  }

  function submitAddTask() {
    setIsInvalidInput(false);
    const areValidInputs = validateInputs(taskNameInput, descriptionInput, dateInput, tagsInput);
    if (areValidInputs) {
      const newTask = {
        title: taskNameInput,
        description: descriptionInput,
        dueDate: dateInput,
        completed: false,
        tags: tagsInput.split(",")
      };

      const data = JSON.parse(localStorage.getItem("data")!);
      data.tasks.push(newTask);
      localStorage.setItem("data", JSON.stringify(data));
      window.location.reload();
    } else {
      setIsInvalidInput(true);
    }
  }

  return(
    <>
      <div
        className="modal fade"
        id="addTaskModal"
        tabIndex={-1}
        aria-labelledby="addTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ width: "435px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addTaskModalLabel">
                <i className="bi bi-patch-plus"></i>&ensp;Add Task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-2">
                <label className="form-label">
                  <i className="bi bi-app-indicator"></i>&ensp;Task Name
                </label>
                <input type="text" 
                  className="form-control" 
                  placeholder="Enter task name" 
                  value={taskNameInput}
                  onChange={(e) => setTaskNameInput(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">
                  <i className="bi bi-card-text"></i>&ensp;Description
                </label>
                <textarea 
                  className="form-control"
                  placeholder="Enter description" 
                  value={descriptionInput}
                  onChange={(e) => setDescriptionInput(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">
                  <i className="bi bi-calendar-check"></i>&ensp;Due Date
                </label>
                <input type="date" 
                  className="form-control" 
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">
                  <i className="bi bi-tags"></i>&ensp;Tags
                </label>
                <textarea 
                  className="form-control" 
                  placeholder="Separate values in commas without spaces" 
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                />
              </div>
              <div className="mb-2 text-danger small">
                {isInvalidInput && (
                  <>
                    <i className="bi bi-info-circle-fill"></i>&ensp;Invalid inputs. Please try again.
                  </>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => submitAddTask()}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTaskModal;