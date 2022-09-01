import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState , useEffect} from 'react';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

function App() {
  const initialState = [
    { id: 1, description: "Painting Wall", title: "Painting", priority: "1" },
    { id: 2, description: "Repair Wall", title: "Repair", priority: "2" },
    { id: 3, description: "Install TV", title: "Install", priority: "3" },
  ];

  const [index,setIndex] = useState(0);
  const [activities, setActivities] = useState(initialState);
  const [activity, setActivity] = useState({id:0});

  useEffect(()=>{
      activities.length <= 0? setIndex(1) : 
      setIndex( Math.max.apply(Math,activities.map(item=>item.id))+1)      
  },[activities]);

  function addActivity(act) {
    setActivities([...activities, { ...act, id: index}]);
  
  } 

  function deleteActivity(id) {
    const filteredActivities = activities.filter((act) => act.id !== id);
    setActivities([...filteredActivities]);
  }

  function getActivity(id) {
    const activity = activities.filter(act=> act.id===id);    
    setActivity(activity[0]);
  }

  function updateActivity(activity){
    setActivities(activities.map(item=> item.id === activity.id ? activity : item ))
    setActivity({id:0});

  }

  function cancelActivity(activity){
    setActivity({id:0});
  }



  return (
    <>
      <ActivityForm 
      addActivity={addActivity}
      selectedActivity={activity}
      activities={activities}  
      updateActivity={updateActivity} 
       cancelActivity={cancelActivity}
       />

      <ActivityList
      activities = {activities}
      deleteActivity={deleteActivity}
      getActivity = {getActivity}     
      />
    </>
  );
}

export default App;
