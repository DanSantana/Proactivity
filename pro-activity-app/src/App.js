import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {

  let initialState = [
    { id: 1, Description: "Painting Wall" },
    { id: 2, Description: "Repair Wall" },
    { id: 3, Description: "Install TV" },
  ];

  const[activities, setActivities] = useState(initialState);

  function addActvity(e){

    e.preventDefault();

    const activity = {
      id: document.getElementById('id').value,
      Description: document.getElementById('description').value
    };

    activities.push(activity);
    setActivities([...activities]);
  }



  return (
    <>
      <div className="mt-5"></div>
    <form>
      <div className='input-group'>
        <input id='id' className='form-control' type="textBox"  placeholder='ID'/>
        <input id='description' className='form-control' type="textBox"  placeholder='description'/>
        <button className='btn btn-primary' onClick={addActvity} id='submit'>+ Activity</button>
      </div>
    </form>

    <div className="mt-2">

          <ul className="list-group float-left">
            {activities.map((comp) => (
              <li key={comp.id} className='list-group-item'>
                {comp.id} {comp.Description}
              </li>
            ))}
          </ul>
    </div>
    </>
  );
}

export default App;
