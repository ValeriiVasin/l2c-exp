import React, { SFC } from 'react';
import { Dispatch, bindActionCreators, AnyAction } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { BoostId, AppState } from '../../constants';
import { Boost } from '../../boost';
import { AppActions, toggleBoost } from '../../actions';

import styles from './row.css';

interface RowProps {
  boost: Boost;
  active: boolean;

  // it was not working if try to not pass arguments here but use mergeProps() for that
  onChange: (id: BoostId, value: boolean) => void;
}

const Row: SFC<RowProps> = ({ boost, active, onChange }) => {
  return (
    <tr
      key={boost.id}
      className={classNames(styles.row, { [styles.active]: active })}
      onClick={() => onChange(boost.id, !active)}
    >
      <td>
        <input
          type="checkbox"
          checked={active}
          onChange={() => onChange(boost.id, !active)}
        />
      </td>
      <td>
        <img width={32} src={boost.image} />
      </td>
      <td>{boost.name}</td>
      <td>{`${boost.exp}%`}</td>
      <td>{`${boost.sp}%`}</td>
      <td>{boost.group}</td>
    </tr>
  );
};

interface RowOwnProps {
  boost: Boost;
}

interface RowStateProps {
  active: boolean;
}

interface RowDispatchProps {
  onChange: (id: BoostId, value: boolean) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: RowOwnProps
): RowStateProps => {
  const { boost } = ownProps;
  const active = state.boosts.includes(boost.id);

  return {
    active
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): RowDispatchProps =>
  bindActionCreators(
    {
      onChange: toggleBoost
    },
    dispatch as Dispatch<AnyAction>
  );

export const RowContainer = connect<
  RowStateProps,
  RowDispatchProps,
  RowOwnProps,
  AppState
>(
  mapStateToProps,
  mapDispatchToProps
)(Row);
