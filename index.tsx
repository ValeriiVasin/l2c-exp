import React, { SFC } from 'react';
import { render } from 'react-dom';
import { Boost, groups, byGroup, BoostId } from './boost';
import classNames from 'classnames';
import styles from './styles.css';

interface RowProps {
  boost: Boost;
  active: boolean;
  onChange?: () => void;
}

const Row: SFC<RowProps> = ({ boost, active, onChange }) => {
  return (
    <tr
      key={boost.id}
      className={classNames(styles.row, { [styles.active]: active })}
      onClick={onChange}
    >
      <td>
        <input
          type="checkbox"
          checked={active}
          onChange={() => console.log('change', boost.id)}
        />
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

const Group: SFC<{ boosts: Boost[]; odd: boolean }> = ({ boosts, odd }) => {
  return (
    <tbody className={classNames({ [styles.odd]: odd })}>
      {boosts.map(boost => (
        <Row boost={boost} key={boost.id} active={false} />
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

render(<App />, document.getElementById('app'));
