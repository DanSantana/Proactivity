import React from "react";

export default function Activity(props) {
  function priorityStyle(param, icon) {
    switch (param) {
      case "1":
        return icon ? "smile" : "success";
      case "2":
        return icon ? "meh" : "warning";
      case "3":
        return icon ? "frown" : "danger";
      default:
        return icon ? "grimace" : "primary";
    }
  }

  function GetPriority(param) {
    switch (param) {
      case "1":
        return "Low";
      case "2":
        return "Regular";
      case "3":
        return "High";
      default:
        return "not defined";
    }
  }

  return (
    <div
      className={
        "card mb-2 shadow-sm border border-" + priorityStyle(props.activity.priority)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge rounded-pill bg-secondary me-1">
              {props.activity.id}
            </span>
            - {props.activity.title}
          </h5>
          <h6>
            Priority:
            <span
              className={"ms-1 text-" + priorityStyle(props.activity.priority)}
            >
              <i
                className={
                  "me-1 fa-solid fa-face-" +
                  priorityStyle(props.activity.priority, true)
                }
              ></i>
              {GetPriority(props.activity.priority)}
            </span>
          </h6>
        </div>
        <p className="card-text">{props.activity.description}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn btn-outline-primary me-2 btn-sm"
            onClick={() => props.getActivity(props.activity.id)}
          >
            <i className="fas fa-pen me-2"></i>
            Edit
          </button>
          <button
            className="btn btn-outline-danger me-2 btn-sm"
            onClick={() => props.deleteActivity(props.activity.id)}
          >
            <i className="fas fa-trash me-2"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
