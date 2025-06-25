import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        account: 'Account',
        link: 'Link'
      },
      mainHero: {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        explore: 'Explore Now'
      },
      form: {
        from: 'From',
        to: 'To',
        departure: 'Departure',
        return: 'Return',
        economy: 'Economy',
        passengers: '1 adult',
        search: 'Search flights',
        multiCity: 'Create multi-city route'
      },
      priceSection: {
        choose: 'Choose',
        cheapest: 'Cheapest',
        fastest: 'Fastest',
        hours: 'hours',
        onTheWay: 'on the way',
        layover: 'Layover'
      },
      footer: {
        companyDesc: 'Company description here',
        company: 'Company',
        quickLinks: 'Quick Links',
        contactUs: 'Contact us',
        address: 'Address of the company',
        copyright: '© {{year}} Company Name. All rights reserved.',
        link: 'Link'
      },
      dropdownCurrency: {
        currency: {
          KZT: 'Kazakhstan Tenge',
          RUB: 'Russian Rouble',
          USD: 'US Dollar'
        },
        language: {
          EN: 'English',
          RU: 'Russian',
          KZ: 'Kazakh'
        }
      }
    }
  },
  ru: {
    translation: {
      navbar: {
        account: 'Аккаунт',
        link: 'Ссылка'
      },
      mainHero: {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        explore: 'Исследовать сейчас'
      },
      form: {
        from: 'Откуда',
        to: 'Куда',
        departure: 'Вылет',
        return: 'Возврат',
        economy: 'Эконом',
        passengers: '1 взрослый',
        search: 'Найти рейсы',
        multiCity: 'Создать маршрут с несколькими городами'
      },
      priceSection: {
        choose: 'Выбрать',
        cheapest: 'Самый дешевый',
        fastest: 'Самый быстрый',
        hours: 'часов',
        onTheWay: 'в пути',
        layover: 'Пересадка'
      },
      footer: {
        companyDesc: 'Описание компании здесь',
        company: 'Компания',
        quickLinks: 'Быстрые ссылки',
        contactUs: 'Связаться с нами',
        address: 'Адрес компании',
        copyright: '© {{year}} Название компании. Все права защищены.',
        link: 'Ссылка'
      },
      dropdownCurrency: {
        currency: {
          KZT: 'Казахстанский тенге',
          RUB: 'Российский рубль',
          USD: 'Доллар США'
        },
        language: {
          EN: 'Английский',
          RU: 'Русский',
          KZ: 'Казахский'
        }
      }
    }
  },
  kz: {
    translation: {
      navbar: {
        account: 'Аккаунт',
        link: 'Сілтеме'
      },
      mainHero: {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        explore: 'Қазір зерттеу'
      },
      form: {
        from: 'Қайдан',
        to: 'Қайда',
        departure: 'Ұшу',
        return: 'Қайту',
        economy: 'Эконом',
        passengers: '1 ересек',
        search: 'Рейстерді іздеу',
        multiCity: 'Бірнеше қала маршрутын жасау'
      },
      priceSection: {
        choose: 'Таңдау',
        cheapest: 'Ең арзан',
        fastest: 'Ең жылдам',
        hours: 'сағат',
        onTheWay: 'жолда',
        layover: 'ауысу (пересадка)'
      },
      footer: {
        companyDesc: 'Компания сипаттамасы осында',
        company: 'Компания',
        quickLinks: 'Жылдам сілтемелер',
        contactUs: 'Бізбен байланыс',
        address: 'Компания мекенжайы',
        copyright: '© {{year}} Компания атауы. Барлық құқықтар қорғалған.',
        link: 'Сілтеме'
      },
      dropdownCurrency: {
        currency: {
          KZT: 'Қазақстан теңгесі',
          RUB: 'Ресей рублі',
          USD: 'АҚШ доллары'
        },
        language: {
          EN: 'Ағылшын тілі',
          RU: 'Орыс тілі',
          KZ: 'Қазақ тілі'
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    }
  });

export default i18n;