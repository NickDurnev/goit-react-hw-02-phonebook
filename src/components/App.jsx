import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import AgreementModal from './AgreementModal';
import { Container } from './App.styled';
import { light } from '../themes';
import Button from './Button';

const timeout = parseInt(light.animationDuration);
let deleteContactID = null;

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    isModalOpen: false,
  };

  addContact = value => {
    const { contacts } = this.state;
    const names = contacts.map(contact => contact.name);
    if (names.includes(value.name)) {
      toast.error(`${value.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, value] };
    });
  };

  addFilterKey = value => {
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  checkAgreement = answear => {
    document.querySelector('#modal-1').classList.add('hidden');
    if (answear === true) {
      this.deleteContact(deleteContactID);
    }
    setTimeout(() => {
      this.setState({ isModalOpen: false });
    }, timeout);
  };

  openModalAgreement = id => {
    deleteContactID = id;
    this.setState({ isModalOpen: true });
  };

  deleteContact = id => {
    const remainingContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    document.querySelector(`#${id}`).classList.add('hidden');
    setTimeout(() => {
      this.setState({ contacts: [...remainingContacts] });
    }, timeout * 2);
  };

  render() {
    const { contacts, isModalOpen } = this.state;
    return (
      <ThemeProvider theme={light}>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={contact => this.addContact(contact)} />

          <h2>Contacts</h2>
          <Filter onChange={value => this.addFilterKey(value)} />
          {contacts.length > 0 && (
            <ContactList
              filterItems={this.filterContacts()}
              onClick={value => this.openModalAgreement(value)}
            />
          )}
          {isModalOpen && (
            <AgreementModal id={'modal-1'}>
              <p>Do you really want delete this contact</p>
              <Button
                onClick={() => this.checkAgreement(false)}
                padding={'5px 15px'}
              >
                No
              </Button>
              <Button
                onClick={() => this.checkAgreement(true)}
                padding={'5px 15px'}
              >
                Yes
              </Button>
            </AgreementModal>
          )}
          <ToastContainer autoClose={3000} />
        </Container>
      </ThemeProvider>
    );
  }
}
