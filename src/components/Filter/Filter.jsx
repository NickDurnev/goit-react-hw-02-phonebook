import PropTypes from 'prop-types';
import { Component } from 'react';

class Filter extends Component {
  handleInputChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input type="text" name="filter" onChange={this.handleInputChange} />
      </label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
