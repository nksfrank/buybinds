const Key = ({
  key,
  value,
  disabled,
  select
}) => (
  <button className="" onClick={() => !disabled && select(key)}>
    {value}
  </button>
);