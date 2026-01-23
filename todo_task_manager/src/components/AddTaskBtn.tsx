function AddBtn() {
  return(
    <>
      <button className="btn" id="add-btn" 
        data-bs-toggle="modal" 
        data-bs-target="#addTaskModal"
      >
        <i className="bi bi-patch-plus"></i>&ensp;Add Task
      </button>
    </>
  );
}

export default AddBtn;