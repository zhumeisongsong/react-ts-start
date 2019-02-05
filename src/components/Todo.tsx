import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Todo.scss';

import { RootState } from '../store';
import { Dispatch } from 'redux';
import { TodoActions } from '../constants/todoTypes';
import { addItemAsync } from '../actions/todo';

const mapStateToProps = ({todo}: RootState) => {
  const {list, loading} = todo;
  return {list, loading};
}

const mapDispatcherToProps = (dispatch: Dispatch<TodoActions>) => {
  return {
    addItem: (item: string) =>
      addItemAsync(dispatch, item)
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

interface IState {
  inputText: string
}

class Todo extends Component<ReduxType> {
  public state: IState = {
    inputText: ''
  };

  public onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({inputText: e.target.value});
  }

  public onAddClick = () => {
    this.props.addItem(this.state.inputText);
    this.setState({inputText: ''});
  }

  public render() {
    const {list, loading} = this.props;
    return (
      <div className="app">
        <input value={this.state.inputText} onChange={this.onInputChange}/>
        <button onClick={this.onAddClick}>Add</button>
        {loading &&
        <div>Loading...</div>}
        <ul>
          {list.map(l => <li key={l}>{l}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Todo);
