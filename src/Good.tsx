import { FC } from 'react';
import cn from 'classnames';

interface Props {
  isGoodSelected: boolean,
  good: string,
  handleToggleGood: (item: string, isSelected: boolean) => void;
}

export const Good: FC<Props> = (props) => {
  const { isGoodSelected, good, handleToggleGood } = props;

  return (
    <tr
      data-cy="Good"
      className={isGoodSelected
        ? 'has-background-success-light'
        : ''}
    >
      <td>
        <button
          data-cy={cn('AddButton', {
            RemoveButton: isGoodSelected,
          })}
          type="button"
          className={cn('button', { 'is-info': isGoodSelected })}
          onClick={() => (
            handleToggleGood(good, isGoodSelected)
          )}
        >
          {isGoodSelected ? '-' : '+'}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};
