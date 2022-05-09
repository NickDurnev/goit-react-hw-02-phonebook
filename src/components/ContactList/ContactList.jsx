import PropTypes from 'prop-types';

const ContactList = ({ filterItems, onClick }) => (
  <ul>
    {filterItems.map(item => (
      <li key={item.id} id={item.id}>
        {item.name}:{item.number}
        <button type="button" onClick={e => onClick(e.target.parentNode.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  filterItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};

export default ContactList;
