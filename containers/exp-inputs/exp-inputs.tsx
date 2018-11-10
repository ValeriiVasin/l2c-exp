import React, { SFC } from 'react';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { AppActions, setValue } from '../../actions';
import { AppState } from '../../constants';
import classNames from 'classnames';
import styles from './exp-inputs.css';
import { formatNumber } from '../../helpers';

interface ExpInputProps {
  value: string;
  exp: string;
  rawExp: string;
}

interface DispatchProps {
  setValue: (value: string) => void;
}

const ExpInputs: SFC<ExpInputProps & DispatchProps> = ({
  value,
  exp,
  rawExp,
  setValue
}) => {
  return (
    <div className={styles.root}>
      <form className="pure-form pure-form-stacked">
        <label htmlFor="value">Введите Опыт</label>
        <input
          id="value"
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <span className="pure-form-message">
          Например, 10.2kk или 10 200 000
        </span>

        <label htmlFor="exp">Опыт</label>
        <input id="exp" type="text" readOnly value={exp} />

        <label htmlFor="raw-exp">Чистый Опыт</label>
        <input
          id="raw-exp"
          type="text"
          readOnly
          value={rawExp}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state: AppState): ExpInputProps => {
  const { value, exp, rawExp } = state.exp;

  return {
    exp: formatNumber(exp),
    rawExp: formatNumber(rawExp),
    value
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps =>
  bindActionCreators(
    {
      setValue
    },
    dispatch as Dispatch<AnyAction>
  );

export const ExpInputsContainer = connect<
  ExpInputProps,
  DispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatchToProps
)(ExpInputs);
