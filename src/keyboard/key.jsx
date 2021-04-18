import cn from 'clsx';

export const Key = ({ id, value, grid, disabled, isBound, isSelected, onClick }) => (
  <button
    className={cn('key', id, { disabled: disabled, bound: isBound, selected: isSelected })}
    disabled={disabled}
    onClick={() => !disabled && onClick()}
    style={{ gridArea: grid }}
  >
    {value}
  </button>
);
