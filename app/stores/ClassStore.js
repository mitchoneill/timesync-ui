import uuid from 'node-uuid';
import alt from '../libs/alt';
import ClassActions from '../actions/ClassActions';

class ClassStore{
  constructor() {
    this.bindActions(ClassActions);

    this.classes = [];

    this.exportPublicMethods({
      get: this.get.bind(this)
    });
  }
  create(group) {
    const classes = this.classes;

    group.id = uuid.v4();

    this.setState({
      classes: classes.concat(group)
    });
  }
  remove(id) {
    this.setState({
      classes: this.classes.filter((group) => group.id !== id)
    });
  }
  get(ids) {
    return (ids || []).map(
      (id) => this.classes.filter((group))
    )
  }
}

export default alt.createStore(ClassStore, 'Classstore')
