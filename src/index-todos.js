import React from 'react'
import { render } from 'react-dom';



const Todos = ({ todos, select, selected }) => (
      <React.Fragment>
            {todos.map(todo => (
                  <React.Fragment key={todo.title}>
                        <h3 data-testid="item" className={selected && selected.title === todo.title ? 'selected' : ''}>{todo.title}</h3>
                        <div>{todo.description}</div>
                        <button onClick={() => select(todo)}>Select</button>
                  </React.Fragment>
            ))}
      </React.Fragment>
);

class TodosContainer extends React.Component {
      state = {
            todo: void 0,
      }

      select = (todo) => {
            this.setState({
                  todo,
            })
      }

      render() {
            return (
                  <Todos {...this.props} select={this.select} selected={this.state.todo} />
            );
      }
}

const todos = [{
      title: 'todo1'
},
{
      title: 'todo2'
}];
render(<TodosContainer todos={todos} />, document.getElementById('root'));