import React, { SFC } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import classNames from 'classnames';

import { Boost, groups, byGroup } from './boost';
import styles from './styles.css';

import { store } from './store';
import { RowContainer } from './containers/row/row';
import { ExpInputsContainer } from './containers/exp-inputs/exp-inputs';

const Group: SFC<{ boosts: Boost[]; odd: boolean }> = ({ boosts, odd }) => {
  return (
    <tbody className={classNames({ [styles.odd]: odd })}>
      {boosts.map(boost => (
        <RowContainer boost={boost} key={boost.id} />
      ))}
    </tbody>
  );
};

const Table = () => (
  <div>
    <ExpInputsContainer />

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
  </div>
);

render(
  <Provider store={store}>
    <Table />
  </Provider>,
  document.getElementById('app')
);
