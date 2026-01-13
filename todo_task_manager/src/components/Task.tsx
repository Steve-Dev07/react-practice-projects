type TaskProps = {
  title: string,
  description: string,
  dueDate: string,
  completed: boolean,
  tags?: string[]
};

function Task({ title, description, dueDate }: TaskProps) {

  return(
    <div className="card mb-4" style={{ minWidth: "450px" }}>
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p style={{ fontSize: "14px" }}>
          {description}
        </p>
        <div style={{ fontSize: "14px" }}>
          <div style={{ float: "left" }}>
            <i className="bi bi-calendar3"></i>&ensp;{dueDate}
          </div>
          <div style={{ float: "right" }}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;