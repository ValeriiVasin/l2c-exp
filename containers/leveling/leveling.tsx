import React, { Component, ChangeEvent } from 'react';
import { formatNumber } from '../../helpers';
import { getExp } from './helpers';
import { AppState, TimeUnit } from '../../constants';
import { connect } from 'react-redux';
import { Time } from './time';
import { InputNumber } from '../input-number/input-number';
import styles from './leveling.css';
import {
  setLevelFrom,
  setLevelTo,
  setSavedExp,
  toggleSavedExp,
  setTime,
  setTimeUnit,
  LevelingActions
} from '../../actions';
import { bindActionCreators, AnyAction, Dispatch } from 'redux';

interface StateProps {
  exp: number;
  from: number;
  to: number;
  savedExp: number;
  savedExpChecked: boolean;
  time: number;
  timeUnit: TimeUnit;
}

interface DispatchProps {
  setLevelFrom: typeof setLevelFrom;
  setLevelTo: typeof setLevelTo;
  setSavedExp: typeof setSavedExp;
  toggleSavedExp: typeof toggleSavedExp;
  setTime: typeof setTime;
  setTimeUnit: typeof setTimeUnit;
}

const MAX_LEVEL = 85;

export class Leveling extends Component<StateProps & DispatchProps> {
  getNeededExp = (
    { scrolls }: { scrolls: boolean } = { scrolls: false }
  ): number => {
    const { from, to } = this.props;

    if (from === 0 || to === 0) {
      return 0;
    }

    if (from > to) {
      return 0;
    }

    if (to > MAX_LEVEL) {
      return 0;
    }

    if (scrolls && this.props.savedExpChecked && this.props.savedExp) {
      return getExp({ from, to }) - this.props.savedExp;
    }

    return getExp({ from, to });
  };

  renderExp = ({ scrolls }: { scrolls: boolean } = { scrolls: false }) => {
    const neededExp = this.getNeededExp({ scrolls });

    if (!neededExp) {
      return;
    }

    return `${formatNumber(neededExp)} EXP`;
  };

  renderTime = () => {
    const neededExp = this.getNeededExp();

    if (!neededExp || !this.props.exp) {
      return;
    }

    const savedExp = this.props.savedExpChecked ? this.props.savedExp : 0;

    return (
      <Time expNeeded={neededExp - savedExp} expGetting={this.props.exp} />
    );
  };

  onSavedExpCheckboxChange = () => {
    this.props.toggleSavedExp(!this.props.savedExpChecked);
  };

  render() {
    return (
      <form className="pure-form">
        <legend>Прокачка уровня</legend>

        <div className={styles.main}>
          <div className={styles.inputs}>
            <InputNumber
              size={5}
              placeholder="от"
              onChange={this.props.setLevelFrom}
              initialValue={this.props.from}
            />

            {' - '}

            <InputNumber
              size={5}
              placeholder="до"
              onChange={this.props.setLevelTo}
              initialValue={this.props.to}
            />
          </div>

          <div className={styles.exp}>{this.renderExp()}</div>
        </div>

        <div className={styles.scrolls}>
          <div className={styles.scrollsCheckbox}>
            <label>
              <input
                type="checkbox"
                checked={this.props.savedExpChecked}
                onChange={this.onSavedExpCheckboxChange}
              />{' '}
              имеющийся эксп (свитки и т.п.)
            </label>
          </div>

          {this.props.savedExpChecked && (
            <div className={styles.scrollsContent}>
              <div className={styles.scrollsInput}>
                <InputNumber
                  onChange={this.props.setSavedExp}
                  initialValue={this.props.savedExp}
                  autoFocus
                />
                <span className="pure-form-message">Например, 37kk</span>
              </div>

              <div className={styles.scrollsExp}>
                {this.renderExp({ scrolls: true })}
              </div>
            </div>
          )}
        </div>

        {this.renderTime()}
      </form>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  return {
    exp: state.exp.exp,
    from: state.leveling.from,
    to: state.leveling.to,
    savedExp: state.leveling.savedExp,
    savedExpChecked: state.leveling.savedExpChecked,
    time: state.leveling.time,
    timeUnit: state.leveling.timeUnit
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<LevelingActions>
): DispatchProps =>
  bindActionCreators(
    {
      setLevelFrom,
      setLevelTo,
      setSavedExp,
      toggleSavedExp,
      setTime,
      setTimeUnit
    },
    dispatch as Dispatch<AnyAction>
  );

export const LevelingContainer = connect<
  StateProps,
  DispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatchToProps
)(Leveling);
