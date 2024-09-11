import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditeMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const updateStatus = (event) => {
    setStatus(event.currentTarget.value)
  }

  return (
    <div>
      {!editMode ?
        (<span onDoubleClick={activateEditMode}>{props.status || "------"}</span>) :
        (<input autoFocus={true} onBlur={deactivateEditeMode} onChange={updateStatus} value={status} type="text"/>)
      }
    </div>
  )
}

export default ProfileStatusWithHooks
