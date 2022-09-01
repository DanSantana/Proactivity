import React from 'react'
import Activity from './Activity';

export default function ActivityList(props) {
  return (
    <div className="mt-2">
    {props.activities.map((act) => (
      <Activity
        key={act.id}
        activity={act}
        deleteActivity={props.deleteActivity}
        getActivity={props.getActivity}
      />
    ))}
  </div>
  )
}
