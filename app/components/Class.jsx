import React from 'react';

class Class extends React.Component {
  render() {
    const name = this.props.name;

    return(
      <li>{name}</li>
    )
  }
}

Class.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Class;
