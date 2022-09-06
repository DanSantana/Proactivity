import { useEffect, useState } from "react";

const initialActivity = {
  id: 0,
  title: "",
  priority: '0',
  description: "",
};

export default function ActivityForm(props) {
  const [activity, setActivity] = useState(currentActivity());

  useEffect(() => {
    if (props.selectedActivity.id !== 0)  setActivity(props.selectedActivity);
}, [props.selectedActivity]);


  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.selectedActivity.id !== 0) {
      props.updateActivity(activity);
    } else {
      props.addActivity(activity);
    }
    setActivity(initialActivity);
  };

  const handlerCancel = (e) => {
    e.preventDefault();

    props.cancelActivity();

    setActivity(initialActivity);
  };

  function currentActivity() {
    if (props.selectedActivity.id !== 0) {
      return props.selectedActivity;
    } else {
      return initialActivity;
    }
  }

  return (
    <>
      <h1>Activity {activity.id !== 0 ? activity.id : ""}</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className="form-control"
            onChange={inputTextHandler}
            value={activity.title}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Priority :</label>
          <select
            id="priority"
            name="priority"
            className="form-select"
            value={activity.priority}
            onChange={inputTextHandler}
          >
            <option defaultValue="0">Choose...</option>
            <option value="1">Low</option>
            <option value="2">Regular</option>
            <option value="3">Hight</option>
          </select>
        </div>

        <div className="col-md-12">
          <label className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            type="text"
            className="form-control"
            value={activity.description}
            onChange={inputTextHandler}
          ></textarea>
          <hr/>
        </div>

        <div className="col-12 mt-0">
          {activity.id === 0 ? (
            <button className="btn btn-outline-secondary" type="submit">
              {" "}
              <i className="fas fa-plus me-2"></i>
              Activity
            </button>
          ) : (
            <>
              <button type="submit" className="btn btn-outline-success me-3">
                <i className="fas fa-plus me-2"></i>
                Save
              </button>

              <button
                className="btn btn-outline-warning"
                onClick={handlerCancel}
              >
                <i className="fas fa-cancel me-2"></i>
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
