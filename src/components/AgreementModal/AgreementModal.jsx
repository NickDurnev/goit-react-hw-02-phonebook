import PropTypes from 'prop-types';
import { Component } from 'react';

class AgreementModal extends Component {
  handleConfirm = () => {
    this.props.onClick(true);
  };

  handleReject = () => {
    this.props.onClick(false);
  };

  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <button type="button" onClick={this.handleReject}>
          No
        </button>
        <button type="button" onClick={this.handleConfirm}>
          Yes
        </button>
      </div>
    );
  }
}

AgreementModal.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AgreementModal;
