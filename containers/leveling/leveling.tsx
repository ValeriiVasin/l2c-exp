import React, { Component, ChangeEvent } from 'react';
import { formatNumber } from '../../helpers';
import { getExp } from './helpers';
import { AppState } from '../../constants';
import { connect } from 'react-redux';
import { Time } from './time';
import { InputNumber } from '../input-number/input-number';

interface LevelingState {
  from: number;
  to: number;
}

interface LevelingProps {
  exp: number;
}

const MAX_LEVEL = 85;

export class Leveling extends Component<LevelingProps, LevelingState> {
  state: LevelingState = {
    from: 0,
    to: 0
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

        <InputNumber
          size={5}
          placeholder="от"
          onChange={from => this.setState({ from })}
        />

        {' - '}

        <InputNumber
          size={5}
          placeholder="до"
          onChange={to => this.setState({ to })}
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
