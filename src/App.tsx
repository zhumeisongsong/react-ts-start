import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { IRootState } from './store';

import { Dispatch } from 'redux';
import * as actions from './actions/';
import { DemoActions } from './constants/types';

import * as asyncActions from './actions/async-actions'


const mapStateToProps = ({demo}: IRootState) => {
  const {list, loading} = demo;
  return {list, loading};
}

const mapDispatcherToProps = (dispatch: Dispatch<DemoActions>) => {
  return {
    addItem: (item: string) =>
      asyncActions.addItemAsync(dispatch, item)
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
    const {list, loading} = this.props;
    return (
      <div className="app">
        <input value={this.state.inputText} onChange={this.onInputChange} />
        <button onClick={this.onAddClick}>Add</button>
        {loading&&
        <div>Loading...</div>}
        <ul>
          {list.map(l => <li key={l}>{l}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);
