import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodList } from './GoodList';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

interface State {
  selectedGood: string;
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleRemove = () => {
    this.setState({ selectedGood: '' });
  };

  handleAdd = (good: string) => {
    this.setState({ selectedGood: good });
  };

  handleToggleGood = (item: string, isSelected: boolean) => {
    if (isSelected) {
      this.handleRemove();
    } else {
      this.handleAdd(item);
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={this.handleRemove}
          />
        </h1>

        <GoodList
          goods={goods}
          selectedGood={selectedGood}
          handleToggleGood={this.handleToggleGood}
        />
      </main>
    );
  }
}
