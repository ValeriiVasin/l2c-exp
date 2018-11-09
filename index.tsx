import React, { SFC } from 'react';
import { render } from 'react-dom';
import { Boost, groups, byGroup } from './boost';
import classNames from 'classnames';
import styles from './styles.css';
import { Provider, connect } from 'react-redux';

import { store } from './store';
import { BoostId, AppState } from './constants';
import { Dispatch, bindActionCreators, AnyAction } from 'redux';
import { AppActions, toggleBoost } from './actions';

interface RowProps {
  boost: Boost;
  active: boolean;
  onChange: () => void;
}

const Row: SFC<RowProps> = ({ boost, active, onChange }) => {
  return (
    <tr
      key={boost.id}
      className={classNames(styles.row, { [styles.active]: active })}
      onClick={onChange}
    >
      <td>
        <input type="checkbox" checked={active} onChange={onChange} />
      </td>
      <td>
        <img src={boost.image} />
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

interface RowMergeProps {
  onChange: () => void;
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

const mergeProps = (
  stateProps: RowStateProps,
  dispatchProps: RowDispatchProps,
  ownProps: RowOwnProps
): RowProps => {
  const { onChange } = dispatchProps;
  const { boost } = ownProps;

  return {
    ...stateProps,
    ...ownProps,
    onChange: () => {
      onChange(boost.id, !stateProps.active);
    }
  };
};

const RowContainer = connect<
  RowStateProps,
  RowDispatchProps,
  RowOwnProps,
  RowMergeProps,
  AppState
>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Row);

const Group: SFC<{ boosts: Boost[]; odd: boolean }> = ({ boosts, odd }) => {
  return (
    <tbody className={classNames({ [styles.odd]: odd })}>
      {boosts.map(boost => (
        <RowContainer boost={boost} key={boost.id} />
      ))}
    </tbody>
  );
};

const App = () => (
  <table className="pure-table">
    <thead>
      <tr>
        <th>#</th>
        <th>image</th>
        <th>name</th>
        <th>EXP</th>
        <th>SP</th>
        <th>Group</th>
      </tr>
    </thead>
    {groups.map((group, index) => (
      <Group key={group} boosts={byGroup[group]} odd={index % 2 === 1} />
    ))}
  </table>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
