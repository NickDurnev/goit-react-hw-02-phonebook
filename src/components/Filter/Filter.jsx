import PropTypes from 'prop-types';
import { Component } from 'react';
import { Label } from './Filter.styled';

class Filter extends Component {
  handleInputChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <Label>
        Find contacts by name
        <input type="text" name="filter" onChange={this.handleInputChange} />
      </Label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
