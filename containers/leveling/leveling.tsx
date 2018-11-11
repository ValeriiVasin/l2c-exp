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
  savedExp: number;
  savedExpChecked: boolean;
}

interface LevelingProps {
  exp: number;
}

const MAX_LEVEL = 85;

export class Leveling extends Component<LevelingProps, LevelingState> {
  state: LevelingState = {
    from: 0,
    to: 0,
    savedExpChecked: false,
    savedExp: 0
  };

  getNeededExp = (
    { scrolls }: { scrolls: boolean } = { scrolls: false }
  ): number => {
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

    if (scrolls && this.state.savedExpChecked && this.state.savedExp) {
      return getExp({ from, to }) - this.state.savedExp;
    }

    return getExp({ from, to });
  };

  renderExp = ({ scrolls }: { scrolls: boolean } = { scrolls: false }) => {
    const neededExp = this.getNeededExp({ scrolls });

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

    const savedExp = this.state.savedExpChecked ? this.state.savedExp : 0;

    return (
      <Time expNeeded={neededExp - savedExp} expGetting={this.props.exp} />
    );
  };

  onSavedExpCheckboxChange = () => {
    const savedExpChecked = !this.state.savedExpChecked;
    this.setState({ savedExpChecked });

    if (!savedExpChecked) {
      this.setState({ savedExp: 0 });
    }
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

        <div>
          <label>
            <input
              type="checkbox"
              checked={this.state.savedExpChecked}
              onChange={this.onSavedExpCheckboxChange}
            />{' '}
            имеющийся эксп (свитки и т.п.)
          </label>
          {this.state.savedExpChecked && (
            <div>
              <InputNumber
                onChange={savedExp => this.setState({ savedExp })}
                autoFocus
              />
              <span className="pure-form-message">Например, 37kk</span>
              {this.renderExp({ scrolls: true })}
            </div>
          )}
        </div>
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
