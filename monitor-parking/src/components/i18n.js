import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
            error: {
                text: 'oops! Error while fetching data'
            },
            parkingCard: {
                notFound: 'not found',
                lastDet: 'Last detection',
                freeAmount: 'Free parking spaces',
                occAmount: 'Occupated parking spaces',
                totalAmount: 'Total parking spaces',
                perc: 'Occupation percentage of the parking lot'
            },
            parkingTiming: {
                five: '5 occupated spaces with the biggest parking time'
            }
        }
      },
      es: {
        translation: {
            error: {
                text: 'uups! Error obteniendo los datos'
            },
            parkingCard: {
                notFound: 'no encotrado',
                lastDet: 'Última detección',
                freeAmount: 'Unidades disponibles',
                occAmount: 'Unidades ocupadas',
                totalAmount: 'Unidades totales',
                perc: 'Porcentaje de ocupación del estacionamiento'
            },
            parkingTiming: {
                five: '5 espacios ocupados por mayor tiempo'
            }
        }
    },
      
      cz: {
        translation: {
            error: {
                text: 'uups! Chyba při odesílání dat'
            },
            parkingCard: {
                notFound: 'není uvedeno',
                lastDet: 'Poslední detekce',
                freeAmount: 'Volná parkovací místa',
                occAmount: 'Obsazená parkovací místa',
                totalAmount: 'Celkový počet parkovacích míst',
                perc: 'Procentuální obsazenost parkoviště'
            },
            parkingTiming: {
                five: '5 nejdéle obsazených parkovacích míst'
            }
        }
      }
    }
  });

export default i18n;