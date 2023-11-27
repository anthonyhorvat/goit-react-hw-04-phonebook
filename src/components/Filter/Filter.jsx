import { FilterInput, FilterInputTitle } from './Filter.styled';

const Filter = ({ onChange }) => {
  return (
    <div>
      <FilterInputTitle>Find contacts by name</FilterInputTitle>
      <FilterInput
        type="text"
        onChange={onChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default Filter;
