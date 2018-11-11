import React, { Component } from 'react';
import { toNumber, formatNumber } from '../../helpers';
import { getExp } from './helpers';

interface LevelingState {
  from: string;
  to: string;
}

export class LevelingContainer extends Component<{}, LevelingState> {
  state: LevelingState = {
    from: '',
    to: ''
  };

  renderExp = () => {
    const from = toNumber(this.state.from);
    const to = toNumber(this.state.to);

    if (!to || !from) {
      return;
    }

    if (from > to) {
      return;
    }

    if (to > 85) {
      return;
    }

    return (
      <p>
        <b>{formatNumber(getExp({ from, to }))} EXP</b>
      </p>
    );
  };

  render() {
    return (
      <form className="pure-form">
        <legend>Прокачка уровня</legend>

        <input
          id="from"
          type="text"
          size={5}
          value={this.state.from}
          onChange={event => this.setState({ from: event.target.value })}
          placeholder="от"
        />
        {' - '}
        <input
          id="to"
          type="text"
          size={5}
          placeholder="до"
          value={this.state.to}
          onChange={event => this.setState({ to: event.target.value })}
        />

        {this.renderExp()}
      </form>
    );
  }
}
