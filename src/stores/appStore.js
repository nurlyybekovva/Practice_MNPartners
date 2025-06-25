import { makeAutoObservable } from 'mobx';
import i18n from '/src/i18n';

class AppStore {
  selectedCurrency = 'KZT';
  selectedLanguage = i18n.language.toUpperCase() || 'RU';
  passengers = '1 adult';
  ticketClass = 'Economy';

  constructor() {
    makeAutoObservable(this);
  }

  setCurrency(currency) {
    this.selectedCurrency = currency;
  }

  setLanguage(language) {
    this.selectedLanguage = language;
    i18n.changeLanguage(language.toLowerCase());
  }

  setPassengers(passengers) {
    this.passengers = passengers;
  }

  setTicketClass(ticketClass) {
    this.ticketClass = ticketClass;
  }
}

const appStore = new AppStore();
export default appStore;