import React from 'react';
import Class from './Class';
import Editable from './Editable';

export default class Timetable extends React.Component {
  render() {
    const subjects = this.props.subjects;

    return <div className="timetable">{subjects.map(this.renderSubject)}</div>;
  }
  renderSubject = (subject) => {
    const classes = this.props.classes;

    return (
      <div>
        <h3>{subject.name}</h3>
        {classes.map(this.renderClass)}
      </div>
    )
  }
  renderClass = (group) => {
    return (
      <Class className="class" key={group.id} name={group.name}>
        <Editable
          value={group.name}
          onEdit={this.props.onEdit.bind(null, group.id)}
          onDelete={this.props.onDelete.bind(null, group.id)}/>
      </Class>
    );
  }
}