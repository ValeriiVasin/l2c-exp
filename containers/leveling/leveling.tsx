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

    return (
      <p>
        <b>{formatNumber(getExp({ from, to }))} EXP</b>
      </p>
    );
  };

  render() {
    return (
      <form className="pure-form pure-form-stacked">
        <legend>Прокачка уровня</legend>

        <label htmlFor="from">От</label>
        <input
          id="from"
          type="text"
          value={this.state.from}
          onChange={event => this.setState({ from: event.target.value })}
          placeholder="1-85"
        />

        <label htmlFor="to">До</label>
        <input
          id="to"
          type="text"
          placeholder="1-85"
          value={this.state.to}
          onChange={event => this.setState({ to: event.target.value })}
        />

        {this.renderExp()}
      </form>
    );
  }
}
