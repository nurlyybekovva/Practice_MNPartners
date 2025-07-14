import { makeAutoObservable, runInAction } from 'mobx';
import i18n from '/src/i18n/i18n';
import { AllApi } from '../api/allApi';

class AppStore {
  selectedCurrency = 'KZT';
  selectedLanguage = i18n.language.toUpperCase() || 'RU';
  passengers = '1 adult';
  ticketClass = 'Economy';

  cityData= [];
  cityLoading = false;
  cityError = null;

  ticketData = [];
  ticketLoading = false;
  ticketError = null;

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

  async fetchCity(page = 0, size = 100) {
    this.cityLoading = true;
    this.cityError = null;

    try {
      const response = await AllApi.getCity({});
      runInAction(() => {
        this.cityData = response.data;
        this.cityLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.cityError = 'Ошибка при загрузке городов';
        this.cityLoading = false;
      });
      console.error(error);
    }
  }

  async fetchTickets(page = 0, size = 100) {
    this.ticketLoading = true;
    this.ticketError = null;

    try {
      const response = await AllApi.getTicket({ page, size });
      runInAction(() => {
        this.ticketData = response.data;
        this.ticketLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.ticketError = 'Ошибка при загрузке билетов';
        this.ticketLoading = false;
      });
      console.error(error);
    }
  }
}


const appStore = new AppStore();
export default appStore;