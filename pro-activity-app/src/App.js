import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {

  let initialState = [
    { id: 1, description: "Painting Wall" },
    { id: 2, description: "Repair Wall" },
    { id: 3, description: "Install TV" },
  ];

  const[activities, setActivities] = useState(initialState);

  function AddActivity(e){

    e.preventDefault();

    const activity = {
      id: document.getElementById('id').value,
      description: document.getElementById('description').value
    };

    // activities.push(activity);
    setActivities([...activities, {...activity}]);
  }



  return (
    <>
      <div className="mt-5"></div>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="id" className="form-label">
            Activity ID
          </label>
          <input type="text" className="form-control" id="id" />
        </div>

        <div className="col-md-6">
          <label for="description" className="form-label">
            Description
          </label>
          <input id="description" type="text" className="form-control"></input>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-outline-secondary"
            onClick={AddActivity}
          >
            + Activity
          </button>
        </div>
      </form>

      <div className="mt-2">
        <ul className="list-group float-left">
          {activities.map((comp) => (
            <li key={comp.id} className="list-group-item">
              {comp.id} {comp.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
