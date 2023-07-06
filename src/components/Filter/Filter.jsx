import PropTypes from 'prop-types';
import { FilterInp, FilterLabel } from './filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      <span>Find contacts by name</span>
      <FilterInp
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
