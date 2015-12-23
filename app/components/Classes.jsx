import React from 'react';
import Class from './Class';
import Editable from './Editable';

class Classes extends React.Component {
  render() {
    const classes = this.props.classes;

    return <div className="classes">{classes.map(this.renderClass)}</div>;
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
Classes.propTypes = {
  classes: React.PropTypes.array,
  onEdit: React.PropTypes.func,
  onDelete: React.PropTypes.func
};
Classes.defaultProps = {
  classes: [],
  onEdit: () => {},
  onDelete: () => {}
};

export default Classes;
