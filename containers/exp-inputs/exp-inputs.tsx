import React, { SFC } from 'react';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { AppActions, setValue, toggleRawExpLock } from '../../actions';
import { AppState } from '../../constants';
import styles from './exp-inputs.css';
import { formatNumber } from '../../helpers';

interface ExpInputProps {
  value: string;
  exp: string;
  rawExp: string;
  rawExpLocked: boolean;
}

interface DispatchProps {
  setValue: (value: string) => void;
  toggleRawExpLock: (value: boolean) => void;
}

const ExpInputs: SFC<ExpInputProps & DispatchProps> = ({
  value,
  exp,
  rawExp,
  setValue,
  rawExpLocked,
  toggleRawExpLock
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
        <input id="raw-exp" type="text" readOnly value={rawExp} />

        <label htmlFor="lock-raw-exp" className="pure-checkbox">
          <input
            id="lock-raw-exp"
            type="checkbox"
            checked={rawExpLocked}
            onChange={() => toggleRawExpLock(!rawExpLocked)}
          />{' '}
          Зафиксировать чистый опыт
        </label>
      </form>
    </div>
  );
};

const mapStateToProps = (state: AppState): ExpInputProps => {
  const { value, exp, rawExp, rawExpLocked } = state.exp;

  return {
    exp: formatNumber(exp),
    rawExp: formatNumber(rawExp),
    value,
    rawExpLocked
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps =>
  bindActionCreators(
    {
      setValue,
      toggleRawExpLock
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
