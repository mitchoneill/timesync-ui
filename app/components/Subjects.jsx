import React from 'react';
import Class from './Class';
import Editable from './Editable';

class Subjects extends React.Component {
  render() {
    const subjects = this.props.subjects;

    return <div className="subjects">{subjects.map(this.renderSubject)}</div>;
  }
  renderSubject = (subject) => {
    return (
      <Class className="subject" key={subject.id} name={subject.name}>
        <Editable
          value={subject.name}
          onEdit={this.props.onEdit.bind(null, subject.id)}
          onDelete={this.props.onDelete.bind(null, subject.id)}/>
      </Class>
    );
  }
}
Subjects.propTypes = {
  subjects: React.PropTypes.array,
  onEdit: React.PropTypes.func,
  onDelete: React.PropTypes.func
};
Subjects.defaultProps = {
  subjects: [],
  onEdit: () => {},
  onDelete: () => {}
};

export default Subjects;
