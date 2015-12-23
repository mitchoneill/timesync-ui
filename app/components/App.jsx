import React from 'react';
import AltContainer from 'alt-container';
import ClassActions from '../actions/ClassActions';
import ClassStore from '../stores/ClassStore';
import Classes from './Classes';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button className="add-class" onClick={this.addClass}>+</button>
        <AltContainer
          stores={[ClassStore]}
          inject={{
            classes: () => ClassStore.getState().classes
          }}>
          <Classes />
        </AltContainer>
      </div>
    );
  }
  addClass() {
    ClassActions.create({name: 'New class'});
  }
}
