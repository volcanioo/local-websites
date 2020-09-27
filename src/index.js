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

for (const key in categories) {
    if (categories.hasOwnProperty(key)) {
        const websites = dom.getWebsitesByCategory(countries['turkey'], countries['germany'], categories[key].id);
        const categoryTitle = document.createElement('strong');
        categoryTitle.classList.add('category-title');
        categoryTitle.innerHTML = categories[key].name;
        dom.createAnElement('website-list', categoryTitle, 'div');
        const row = document.createElement('div');
        row.classList.add('table-view__row');
        for (let i = 0; i < websites.length; i++) {
            const column = document.createElement('div');
            column.classList.add('table-view__column');
            for (let j = 0; j < Object.keys(websites[i]).length; j++) {
                column.innerHTML += `<a href="` + websites[i][j].url + `" rel="nofollow" target="_blank">` + websites[i][j].name + `</a>`;
            }
            row.appendChild(column);
        }
        document.querySelector('[data-modal="website-list"]').appendChild(row);
    }
}