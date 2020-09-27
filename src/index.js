// Styles
import './styles/main.scss';

// Data
import categories from './data/categories.json';
import countries from './data/countries.js';

// App
import dom from './core.js';
const app = document.querySelector('app');
dom.setElement('total-country-count', Object.keys(countries).length);
dom.setSelect('all-cities', countries, 'country_name');

// List
const elements = [document.getElementById('from'), document.getElementById('to')];

for (const i in elements) {
    if (elements.hasOwnProperty(i)) {
        const element = elements[i];
        element.addEventListener('change', function (el) {
            const from = elements[0].options[elements[0].options.selectedIndex].value;
            const to = elements[1].options[elements[1].options.selectedIndex].value;
            if (from !== "-1" && to !== "-1") {
                document.querySelector('.is-list-open').classList.add('yes');
                dom.getListOfWebsites(categories, countries[from], countries[to]);
                dom.setElement('from', from);
                dom.setElement('to', to);
            }
        })
    }
}