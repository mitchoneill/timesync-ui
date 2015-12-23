import React from 'react';
import Class from './Class';

class Classes extends React.Component {
  render() {
    const classes = this.props.classes;

    return <div className="classes">{classes.map(this.renderClass)}</div>;
  }
  renderClass = (group) => {
    return (
      <Class className="class" name={group.name} />
    );
  }
}
Classes.propTypes = {
  classes: React.PropTypes.array
};
Classes.defaultProps = {
  classes: []
};


export default Classes;
