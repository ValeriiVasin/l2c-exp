import React, { Component, ChangeEvent } from 'react';
import { toNumber } from '../../helpers';

interface InputNumberProps {
  initialValue?: number;
  size?: number;
  placeholder?: string;
  onChange: (value: number) => void;
}

interface InputNumberState {
  value: string;
}

export class InputNumber extends Component<InputNumberProps, InputNumberState> {
  state = {
    value: ''
  };

  componentDidMount() {
    if (this.props.initialValue) {
      this.setState({ value: String(this.props.initialValue) });
    }
  }

  onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ value });

    const number = toNumber(value);

    if (number) {
      this.props.onChange(number);
    }
  };

  render() {
    return (
      <input
        type="text"
        size={this.props.size}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={this.onInputValueChange}
      />
    );
  }
}
