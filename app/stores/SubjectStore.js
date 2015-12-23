import uuid from 'node-uuid';
import alt from '../libs/alt';
import SubjectActions from '../actions/SubjectActions';

class SubjectStore{
  constructor() {
    this.bindActions(SubjectActions);

    this.subjects = [];

    this.exportPublicMethods({
      get: this.get.bind(this)
    });
  }
  create(subject) {
    const subjects = this.subjects;

    subject.id = uuid.v4();

    this.setState({
      subjects: subjects.concat(subject)
    });
  }
  remove(id) {
    this.setState({
      subjects: this.subjects.filter((subject) => group.id !== id)
    });
  }
  update({id, name}) {
    const classes = this.subjects.map((subject) => {
      if (subject.id === id) {
        subject.name = name;
      }
      return classes;
    });
  }
  get(ids) {
    return (ids || []).map(
      (id) => this.subjects.filter((subject))
    );
  }
}

export default alt.createStore(SubjectStore, 'Classstore');
