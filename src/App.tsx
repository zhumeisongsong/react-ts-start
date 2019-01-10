import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { IRootState } from './store';
import { Dispatch } from 'redux';
import * as actions from './actions/';
import { DemoActions } from './constants/Actiontypes';


const mapStateToProps = ({demo}: IRootState) => {
  const {list} = demo;
  return {list};
}

const mapDispatcherToProps = (dispatch: Dispatch<DemoActions>) => {
  return {
    addItem: (item: string) =>
    dispatch(actions.addItemToList(item))
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

interface IState {
  inputText: string
}

class App extends Component<ReduxType> {
  public state: IState = {inputText: ''};

  public onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({inputText: e.target.value});
  }

  public onAddClick = () => {
    this.props.addItem(this.state.inputText);
    this.setState({inputText: ''});
  }

  public render() {
    const {list} = this.props;
    return (
      <div className="app">
        <input value={this.state.inputText} onChange={this.onInputChange} />
        <button onClick={this.onAddClick}>Add</button>
        <ul>
          {list.map(l => <li key={l}>{l}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);
