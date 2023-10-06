import { Label } from './filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts:
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};
