import React, { SFC, Component, ChangeEvent } from 'react';
import { AppState } from '../../constants';
import { boostCoefficient, formatNumber } from '../../helpers';
import { connect } from 'react-redux';
import { convertPartyExp } from './helpers';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import {
  changeMembersTo,
  changeMembersFrom,
  changePenaltyFrom,
  changePenaltyTo,
  PartyActions
} from '../../actions';

interface StateProps {
  exp: string;
  membersTo: number;
  penaltyTo: number;
  membersFrom: number;
  penaltyFrom: number;
}

interface DispatchProps {
  changeMembersFrom: typeof changeMembersFrom;
  changeMembersTo: typeof changeMembersTo;
  changePenaltyFrom: typeof changePenaltyFrom;
  changePenaltyTo: typeof changePenaltyTo;
}

interface PartyMembersSelectProps {
  members: number;
  onChange: (members: number) => void;
}

const PartyMembersSelect: SFC<PartyMembersSelectProps> = ({
  members,
  onChange
}) => (
  <select
    value={members}
    onChange={event => onChange(Number(event.target.value))}
  >
    <option value="1">1 игрок</option>
    <option value="2">2 игрока</option>
    <option value="3">3 игрока</option>
    <option value="4">4 игрока</option>
    <option value="5">5 игроков</option>
    <option value="6">6 игроков</option>
    <option value="7">7 игроков</option>
    <option value="8">8 игроков</option>
    <option value="9">9 игроков</option>
  </select>
);

interface PartyPenaltySelectProps {
  penalty: number;
  disabled?: boolean;
  onChange: (penalty: number) => void;
}
const PartyPenaltySelect: SFC<PartyPenaltySelectProps> = ({
  penalty,
  disabled,
  onChange
}) => (
  <select
    value={penalty}
    onChange={event => onChange(Number(event.target.value))}
    disabled={disabled}
  >
    <option value="0">нет</option>
    <option value="1">1 уровень</option>
    <option value="2">2 уровня</option>
    <option value="3">3 уровня</option>
    <option value="4">4 уровня</option>
    <option value="5">5 уровней</option>
    <option value="6">6 уровней</option>
    <option value="7">7 уровней</option>
    <option value="8">8 уровней</option>
    <option value="9">9 уровней</option>
    <option value="10">10 уровней</option>
    <option value="11">11 уровней</option>
    <option value="12">12 уровней</option>
    <option value="13">13 уровней</option>
    <option value="14">14 уровней</option>
  </select>
);

class Party extends Component<StateProps & DispatchProps> {
  onMembersFromChange = (members: number) => {
    this.props.changeMembersFrom(members);
  };

  onPenaltyFromChange = (penalty: number) => {
    this.props.changePenaltyFrom(penalty);
  };

  onMembersToChange = (members: number) => {
    this.props.changeMembersTo(members);
  };

  onPenaltyToChange = (penalty: number) => {
    this.props.changePenaltyTo(penalty);
  };

  render() {
    return (
      <form className="pure-form pure-form-stacked">
        <table className="pure-table pure-table-horizontal">
          <thead>
            <tr>
              <th>игроков в пати</th>
              <th>разница в уровнях</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th colSpan={2}>при замере</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <PartyMembersSelect
                  members={this.props.membersFrom}
                  onChange={this.onMembersFromChange}
                />
              </td>
              <td>
                <PartyPenaltySelect
                  penalty={this.props.penaltyFrom}
                  disabled={this.props.membersFrom === 1}
                  onChange={this.onPenaltyFromChange}
                />
              </td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={2} title="при той же скорости убийства мобов">
                рассчитать для
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <PartyMembersSelect
                  members={this.props.membersTo}
                  onChange={members => this.onMembersToChange(members)}
                />
              </td>
              <td>
                <PartyPenaltySelect
                  penalty={this.props.penaltyTo}
                  disabled={this.props.membersTo === 1}
                  onChange={this.onPenaltyToChange}
                />
              </td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={2}>результат</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>{this.props.exp}</td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  const exp: number =
    convertPartyExp(state.exp.rawExp, {
      membersFrom: state.party.membersFrom,
      membersTo: state.party.membersTo,
      penaltyFrom: state.party.penaltyFrom,
      penaltyTo: state.party.penaltyTo
    }) * boostCoefficient(state.boosts);

  return {
    exp: formatNumber(exp),
    membersFrom: state.party.membersFrom,
    penaltyFrom: state.party.penaltyFrom,
    membersTo: state.party.membersTo,
    penaltyTo: state.party.penaltyTo
  };
};

const mapDispatchToProps = (dispatch: Dispatch<PartyActions>): DispatchProps =>
  bindActionCreators(
    {
      changeMembersFrom,
      changeMembersTo,
      changePenaltyFrom,
      changePenaltyTo
    },
    dispatch as Dispatch<AnyAction>
  );

export const PartyContainer = connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(Party);
