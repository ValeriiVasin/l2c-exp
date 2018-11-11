import React, { Component, ChangeEvent } from 'react';
import { toNumber, formatNumber } from '../../helpers';
import { formatTime } from './helpers';

interface TimeProps {
  expNeeded: number;
  expGetting: number;
}

enum TimeUnit {
  Hours = 'hours',
  Minutes = 'minutes'
}

interface TimeState {
  timeValue: string;
  time: number;
  timeUnit: TimeUnit;
}

export class Time extends Component<TimeProps, TimeState> {
  state = {
    timeValue: '1',
    time: 1,
    timeUnit: TimeUnit.Hours
  };

  getMinutes = () => {
    return this.state.timeUnit === TimeUnit.Minutes
      ? this.state.time
      : this.state.time * 60;
  };

  onTimeValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ timeValue: value });

    const time = toNumber(value);
    if (!time) {
      return;
    }

    this.setState({ time });
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
      <div style={{ marginTop: 20 }}>
        <legend>Опыт был замерян за:</legend>
        <input
          type="text"
          size={4}
          value={this.state.timeValue}
          onChange={this.onTimeValueChange}
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
