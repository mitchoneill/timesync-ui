import React from 'react';
import AltContainer from 'alt-container';
import ClassActions from '../actions/ClassActions';
import ClassStore from '../stores/ClassStore';
import Classes from './Classes';
import SubjectActions from '../actions/SubjectActions';
import SubjectStore from '../stores/SubjectStore';
import Subjects from './Subjects';
import Timetable from './Timetable';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button className="add-class" onClick={this.addClass}>+ Add class</button>
          <AltContainer
            stores={[ClassStore]}
            inject={{
              classes: () => ClassStore.getState().classes
            }}>
            <Classes onEdit={this.editClass} onDelete={this.deleteClass}/>
          </AltContainer>
        </div>

        <div>
          <button className="add-subject" onClick={this.addSubject}>+ Add subject</button>
          <AltContainer
            stores={[SubjectStore]}
            inject={{
              subjects: () => SubjectStore.getState().subjects
            }}>
            <Subjects onEdit={this.editSubject} onDelete={this.deleteSubject} />
          </AltContainer>
        </div>

        <div>
          <AltContainer
            stores={[SubjectStore, ClassStore]}
            inject={{
              subjects: () => SubjectStore.getState().subjects,
              classes: () => ClassStore.getState().classes
            }}>
            <Timetable onEdit={this.editClass} onDelete={this.deleteClass}/>
          </AltContainer>
        </div>
      </div>
    );
  }
  addClass() {
    ClassActions.create({name: 'New class'});
  }
  editClass(id, name) {
    ClassActions.update({id, name});
  }
  deleteClass(id, name) {
    ClassActions.remove(id);
  }
  addSubject() {
    SubjectActions.create({name: 'New Subject'});
  }
  editSubject(id, name) {
    SubjectActions.update({id, name});
  }
  deleteSubject(id, name) {
    SubjectActions.remove(id);
  }
}
