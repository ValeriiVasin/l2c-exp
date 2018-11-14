import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { BoostId, AppState } from '../../constants';
import { byId, Boost } from '../../boost';
import { boostPercentage } from '../../helpers';
import { removeBoost, AppActions } from '../../actions';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import styles from './boost-list.css';

interface StateProps {
  boosts: Boost[];
  percentage: number;
}

interface DispatchProps {
  removeBoost: (id: BoostId) => void;
}

type BoostListProps = StateProps & DispatchProps;

const BoostList: SFC<BoostListProps> = ({
  boosts,
  percentage,
  removeBoost
}) => {
  if (boosts.length === 0) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.list}>
        {boosts.map(boost => (
          <div
            key={boost.id}
            className={styles.item}
            title={`Удалить "${boost.name}"`}
            onClick={() => removeBoost(boost.id)}
          >
            <img src={boost.image} className={styles.image} />

            <div className={styles.percentage}>{boost.exp}%</div>
          </div>
        ))}
      </div>
      {boosts.length > 1 && (
        <div className={styles.totalPercentage} title={'Итоговый Буст'}>Итого: {percentage}%</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => {
  return {
    boosts: state.boosts
      .map(id => byId[id])
      .sort((a, b) => a.group.localeCompare(b.group)),
    percentage: boostPercentage(state.boosts)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>): DispatchProps =>
  bindActionCreators(
    {
      removeBoost
    },
    dispatch as Dispatch<AnyAction>
  );

export const BoostContainer = connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(BoostList);
