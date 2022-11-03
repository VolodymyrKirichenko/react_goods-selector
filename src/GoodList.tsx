import { FC } from 'react';
import { Good } from './Good';

interface Props {
  goods: string[],
  selectedGood: string,
  goodToggleSelect: (item: string, isSelected: boolean) => void;
}

export const GoodList: FC<Props> = (props) => {
  const { goods, selectedGood, goodToggleSelect } = props;

  return (
    <table className="table">
      <tbody>
        {goods.map((good) => {
          const isGoodSelected = selectedGood === good;

          return (
            <Good
              isGoodSelected={isGoodSelected}
              good={good}
              goodToggleSelect={goodToggleSelect}
            />
          );
        })}
      </tbody>
    </table>
  );
};
