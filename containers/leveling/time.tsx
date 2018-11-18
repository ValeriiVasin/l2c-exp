import React, { Component, ChangeEvent } from 'react';
import { formatNumber } from '../../helpers';
import { formatTime } from './helpers';
import { InputNumber } from '../input-number/input-number';
import styles from './time.css';
import { TimeUnit } from '../../constants';

interface TimeProps {
  expNeeded: number;
  expGetting: number;
}

interface TimeState {
  time: number;
  timeUnit: TimeUnit;
}

export class Time extends Component<TimeProps, TimeState> {
  state = {
    time: 1,
    timeUnit: TimeUnit.Hours
  };

  getMinutes = () => {
    return this.state.timeUnit === TimeUnit.Minutes
      ? this.state.time
      : this.state.time * 60;
  };

  onTimeUnitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ timeUnit: event.target.value as TimeUnit });
  };

  expPerMinute = () => {
    return this.props.expGetting / this.getMinutes();
  };

  renderExpPerHour = () => {
    return (
      <p>
        опыт в час: <b>{formatNumber(this.expPerMinute() * 60)}</b>
      </p>
    );
  };

  renderDuration = () => {
    const minutes = this.props.expNeeded / this.expPerMinute();
    return (
      <p>
        для достижения цели потребуется: <b>{formatTime(minutes)}</b>
      </p>
    );
  };

  render() {
    return (
      <div className={styles.root}>
        <legend>Опыт был замерян за:</legend>
        <InputNumber
          size={4}
          initialValue={this.state.time}
          onChange={time => this.setState({ time })}
        />{' '}
        <select value={this.state.timeUnit} onChange={this.onTimeUnitChange}>
          <option value={TimeUnit.Hours}>часов</option>
          <option value={TimeUnit.Minutes}>минут</option>
        </select>
        {this.renderExpPerHour()}
        {this.renderDuration()}
      </div>
    );
  }
}
