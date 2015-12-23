import React from 'react';

class Class extends React.Component {
  render() {
    const name = this.props.name;
    const key = this.props.key;

    return (
      <li value={key}>{name}</li>
    );
  }
}

Class.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Class;
