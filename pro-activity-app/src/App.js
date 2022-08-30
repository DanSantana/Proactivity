import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {

  let initialState = [
    { id: 1, description: "Painting Wall" , title:"Painting", priority:'Low' },
    { id: 2, description: "Repair Wall" , title:"Repair", priority:'Regular' },
    { id: 3, description: "Install TV", title:"Install", priority:'Hight'  },
  ];

  const[activities, setActivities] = useState(initialState);

  function AddActivity(e){

    e.preventDefault();

    const activity = {
      id: document.getElementById('id').value,    
      title: document.getElementById('title').value,
      priority: GetPriority(document.getElementById('priority').value),
      description: document.getElementById('description').value
    };

    // activities.push(activity);
    setActivities([...activities, {...activity}]);
  }


  function GetPriorityIcon(param){
    switch(param){
      case '1':
        return "smile"
      case '2':
        return "meh"
      case '3':
        return "frown"
      default:
        return 'Undefined'
    } 
  }

  function GetPriority(param){
    switch(param){
       case '1':
      return "Low"
      case '2':
      return "Regular"
      case '3':
      return "Right"
      default:
        return 'Undefined'
    } 


  }



  return (
    <>
      <div className="mt-5"></div>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Activity ID</label>
          <input type="text" className="form-control" id="id" />
        </div>

        <div className="col-md-6">
        <label className="form-label">Priority :</label>
          <select id="priority" className="form-select">
            <option defaultValue="0">Choose...</option>
            <option value="1">Low</option>
            <option value="2">Regular</option>
            <option value="3">Hight</option>
          </select>
       </div>

       <div className="col-md-6">
          <label className="form-label">Title</label>
          <input id="title" type="text" className="form-control"></input>
        </div>


        <div className="col-md-6">
          <label className="form-label">Description</label>
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
        {activities.map((comp) => (
          <div
            key={comp.id}
            className="card mb-2 shadow-sm"
     
          >
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge rounded-pill bg-secondary me-1">
                    {comp.id}
                  </span>
                  -  {comp.title}
                </h5>
                <h6 >Priority:
                  <span className='ms-1 text-black'>
                    <i className="me-1 fa-solid fa-face-smile"></i>
                    {comp.priority}
                  </span>
                </h6>
              </div>
              <p className="card-text">{comp.description}</p>
             <div className="d-flex justify-content-end pt-2 m-0 border-top"> 
                <button className="btn btn-outline-primary me-2 btn-sm">
                  <i className="fas fa-pen me-2"></i>
                  Edit
                  </button>
                <button className="btn btn-outline-danger me-2 btn-sm">
                  <i className="fas fa-trash me-2">
                    </i>
                    Delete
                    </button>            
             </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
