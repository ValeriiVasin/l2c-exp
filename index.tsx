import React, { Fragment, SFC } from 'react';
import { render } from 'react-dom';
import { boosts, Boost, BoostGroup, groups, byGroup } from './boost';
import classNames from 'classnames';

const Group: SFC<{ group: BoostGroup; boosts: Boost[]; odd: boolean }> = ({
  group,
  boosts,
  odd
}) => {
  return (
    <tbody className={classNames({ ['pure-table-odd']: odd })}>
      {boosts.map(boost => {
        return (
          <tr key={boost.id}>
            <td>
              <img src={boost.image} />
            </td>
            <td>{boost.name}</td>
            <td>{`${boost.exp}%`}</td>
            <td>{`${boost.sp}%`}</td>
            <td>{group}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

const App = () => (
  <table className="pure-table">
    <thead>
      <tr>
        <th>image</th>
        <th>name</th>
        <th>EXP</th>
        <th>SP</th>
        <th>Group</th>
      </tr>
    </thead>
    {groups.map((group, index) => (
      <Group key={group} group={group as BoostGroup} boosts={byGroup[group]} odd={index % 2 === 1} />
    ))}
  </table>
);

render(<App />, document.getElementById('app'));
