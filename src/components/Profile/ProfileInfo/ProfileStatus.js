import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditeMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status);
  }

  updateStatus = (event) => {
    this.setState({
      status: event.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode ?
          (<span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>) :
          (<input autoFocus={true} onChange={this.updateStatus} onBlur={this.deactivateEditeMode} type="text" value={this.state.status}/>)
        }
      </div>
    )
  }
}

export default  ProfileStatus
