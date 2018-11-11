import React, { SFC, Component, ChangeEvent } from 'react';
import { AppState } from '../../constants';
import { boostCoefficient, formatNumber } from '../../helpers';
import { connect } from 'react-redux';
import { convertPartyExp } from './helpers';

interface PartyProps {
  rawExp: number;
  boostCoefficient: number;
}

interface PartyState {
  membersFrom: number;
  penaltyFrom: number;
  membersTo: number;
  penaltyTo: number;
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

class Party extends Component<PartyProps, PartyState> {
  state: PartyState = {
    membersFrom: 1,
    membersTo: 2,
    penaltyFrom: 0,
    penaltyTo: 0
  };

  onMembersFromChange = (members: number) => {
    this.setState({ membersFrom: members });
    if (members === 1) {
      this.setState({ penaltyFrom: 0 });
    }
  };

  onPenaltyFromChange = (penalty: number) => {
    this.setState({ penaltyFrom: penalty });
  };

  onMembersToChange = (members: number) => {
    this.setState({ membersTo: members });
    if (members === 1) {
      this.setState({ penaltyTo: 0 });
    }
  };

  onPenaltyToChange = (penalty: number) => {
    this.setState({ penaltyTo: penalty });
  };

  renderExp = () => {
    return formatNumber(
      convertPartyExp(this.props.rawExp, {
        membersFrom: this.state.membersFrom,
        membersTo: this.state.membersTo,
        penaltyFrom: this.state.penaltyFrom,
        penaltyTo: this.state.penaltyTo
      }) * this.props.boostCoefficient
    );
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
                  members={this.state.membersFrom}
                  onChange={this.onMembersFromChange}
                />
              </td>
              <td>
                <PartyPenaltySelect
                  penalty={this.state.penaltyFrom}
                  disabled={this.state.membersFrom === 1}
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
                  members={this.state.membersTo}
                  onChange={amount => this.setState({ membersTo: amount })}
                />
              </td>
              <td>
                <PartyPenaltySelect
                  penalty={this.state.penaltyTo}
                  disabled={this.state.membersTo === 1}
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
              <td colSpan={2}>{this.renderExp()}</td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

const mapStateToProps = (state: AppState): PartyProps => {
  return {
    rawExp: state.exp.rawExp,
    boostCoefficient: boostCoefficient(state.boosts)
  };
};

export const PartyContainer = connect<PartyProps, {}, {}, AppState>(
  mapStateToProps
)(Party);
