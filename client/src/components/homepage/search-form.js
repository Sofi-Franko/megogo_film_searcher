import { Form, InputGroup } from 'react-bootstrap';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

function SearchForm({ filterMap, onChangeFilterMap, keyword, setKeyword }) {
  const onChangeType = ({ target: { value } }) => {
    onChangeFilterMap((prev) => {
      return { ...prev, type: value };
    });
  };

  const onChangeYear = (value) => {
    onChangeFilterMap((prev) => {
      return { ...prev, year: value };
    });
  };

  const onChangeKeyword = async (event) => {
    const {
      target: { value: searchString }
    } = event;
    event.preventDefault();
    setKeyword(searchString);
  };

  return (
    <Form className="w-100 mb-3">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="e.g. Star Wars..."
          onChange={onChangeKeyword}
          value={keyword}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={['year']}
            label="Serach by year"
            value={filterMap.year}
            onChange={onChangeYear}
            renderInput={(params) => <TextField {...params} helperText={null} />}
          />
        </LocalizationProvider>
        <select className="form-select" aria-label="Default select example" onChange={onChangeType}>
          <option selected value={'all'}>
            All
          </option>
          <option value={'movie'}>Movie</option>
          <option value={'series'}>Series</option>
          <option value={'episode'}>Episode</option>
          <option value={'game'}>Game</option>
        </select>
      </InputGroup>
    </Form>
  );
}

export default SearchForm;
