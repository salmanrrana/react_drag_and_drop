import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import initialData from './initial-data';
import Column from './components/Column';

class App extends React.Component {
  state = initialData;

  render() {
    // columnOrder array stores the order
    // that we want to render out our columns in
    return this.state.columnOrder.map((columnId) => {
      // This will pull the column out of our state
      const column = this.state.columns[columnId];
      // this will get the tasks associated to that column
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
