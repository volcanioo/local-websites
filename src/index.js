// Styles
import './styles/main.scss';

// Data
import categories from './data/categories.json';
import countries from './data/countries.js';

// App
import dom from './core.js';
const app = document.querySelector('app');
dom.setElement('total-country-count', Object.keys(countries).length);
dom.setSelect('all-cities', countries, 'country_name')
