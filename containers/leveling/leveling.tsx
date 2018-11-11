import React, { Component, ChangeEvent } from 'react';
import { toNumber, formatNumber } from '../../helpers';
import { getExp } from './helpers';
import { AppState } from '../../constants';
import { connect } from 'react-redux';
import { Time } from './time';

interface LevelingState {
  fromValue: string;
  from: number;
  toValue: string;
  to: number;
}

interface LevelingProps {
  exp: number;
}

const MAX_LEVEL = 85;

export class Leveling extends Component<LevelingProps, LevelingState> {
  state: LevelingState = {
    fromValue: '',
    from: 0,
    toValue: '',
    to: 0
  };

  onFromValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ fromValue: value });

    const from = toNumber(value);
    if (from) {
      this.setState({ from });
    }
  };

  onToValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ toValue: value });

    const to = toNumber(value);
    if (to) {
      this.setState({ to });
    }
  };

  getNeededExp = (): number => {
    const { from, to } = this.state;

    if (from === 0 || to === 0) {
      return 0;
    }

    if (from > to) {
      return 0;
    }

    if (to > MAX_LEVEL) {
      return 0;
    }

    return getExp({ from, to });
  };

  renderExp = () => {
    const neededExp = this.getNeededExp();

    if (!neededExp) {
      return;
    }

    return (
      <p>
        <b>{formatNumber(neededExp)} EXP</b>
      </p>
    );
  };

  renderTime = () => {
    const neededExp = this.getNeededExp();

    if (!neededExp || !this.props.exp) {
      return;
    }

    return <Time expNeeded={neededExp} expGetting={this.props.exp} />;
  };

  render() {
    return (
      <form className="pure-form">
        <legend>Прокачка уровня</legend>

        <input
          id="from"
          type="text"
          size={5}
          value={this.state.fromValue}
          onChange={this.onFromValueChange}
          placeholder="от"
        />
        {' - '}
        <input
          id="to"
          type="text"
          size={5}
          placeholder="до"
          value={this.state.toValue}
          onChange={this.onToValueChange}
        />

        {this.renderExp()}
        {this.renderTime()}
      </form>
    );
  }
}

const mapStateToProps = (state: AppState): LevelingProps => {
  return {
    exp: state.exp.exp
  };
};

export const LevelingContainer = connect<LevelingProps, {}, {}, AppState>(
  mapStateToProps
)(Leveling);
