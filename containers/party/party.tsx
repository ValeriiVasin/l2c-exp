import React, { SFC, Component, ChangeEvent } from 'react';
import { AppState } from '../../constants';
import { boostCoefficient, formatNumber } from '../../helpers';
import { connect } from 'react-redux';
import { partyExp } from './helpers';

interface PartyProps {
  rawExp: number;
  boostCoefficient: number;
}

interface PartyState {
  partyMembers: number;
  targetPartyMembers: number;
}

class Party extends Component<PartyProps, PartyState> {
  state: PartyState = {
    partyMembers: 1,
    targetPartyMembers: 2
  };

  onPartyMembersChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ partyMembers: Number(event.target.value) });
  };

  onTargetPartyMembersChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ targetPartyMembers: Number(event.target.value) });
  };

  render() {
    return (
      <form className="pure-form pure-form-stacked">
        <table className="pure-table">
          <thead>
            <tr>
              <th title="количество человек в пати при замере">пати</th>
              <th>штраф</th>
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
                <select
                  id="party-members"
                  value={this.state.partyMembers}
                  onChange={this.onPartyMembersChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </td>
              <td>TBD</td>
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
                <select
                  id="target-party-members"
                  value={this.state.targetPartyMembers}
                  onChange={this.onTargetPartyMembersChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </td>
              <td>TBD</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan={2}>результат</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                {formatNumber(
                  partyExp(this.props.rawExp, {
                    from: this.state.partyMembers,
                    to: this.state.targetPartyMembers
                  }) * this.props.boostCoefficient
                )}
              </td>
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
