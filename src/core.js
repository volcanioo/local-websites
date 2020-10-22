export default {
    /**
     * Set an element's value by data-modal
     * @param modalName
     * @param content
    **/
    setElement(modalName, content) {
        const elements = document.querySelectorAll('*[data-modal='+modalName+']');
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = content;
        }
    },
    /**
     * Set a select element's option values via an object and specific property in that object 
     * ? Should I do property section optional?
     * @param modalName
     * @param object
     * @param property It must contain in object param
    **/
    setSelect(modalName, object, property) {
        const selects = document.querySelectorAll('*[data-modal='+modalName+']');
        for (let i = 0; i < selects.length; i++) {
            for (let j = 0; j < Object.keys(object).length; j++) {
                const option = document.createElement("option");
                option.value = Object.values(object)[j]['country_name'].toLowerCase();
                option.text = Object.values(object)[j][property];
                selects[i].add(option);
            }
        }
    },
    /**
     * This function creates an element inside of @modalName element with @content as a @node with @customClass
     * @param modalName
     * @param content It must contain in object param
     * @param node which element do you want to create? (li, div, span)
     * @param customClass what's new element's class
    **/
    createAnElement(modalName, content, node, customClass = '') {
        const parentElement = document.querySelector('*[data-modal='+modalName+']');
        const newElement = document.createElement(node);
        if (typeof content === "object") {
            newElement.appendChild(content);
        } else {
            newElement.innerHTML = content;
        }
        if (customClass) newElement.classList.add(customClass);
        parentElement.appendChild(newElement);
        return newElement;
    },
    /**
     * This function returns filtered countries list (as JSON) by category
     * @param to
     * @param from 
     * @param category 
    **/
    getWebsitesJSONByCategory(to, from, category) {
        const filteredTo = {...to.websites.filter((item) => item.category.includes(category))};
        const filteredFrom = {...from.websites.filter((item) => item.category.includes(category))};
        return [filteredTo, filteredFrom];
    },
    /**
     * This function creates html of result's table
     * @param categories
     * @param from 
     * @param to 
    **/
    getListOfWebsites(categories, from, to) {
        document.querySelector('[data-modal=website-list]').innerHTML = "";
        for (const key in categories) {
            if (categories.hasOwnProperty(key)) {
                const websites = this.getWebsitesJSONByCategory(from, to, categories[key].id);
                const categoryTitle = document.createElement('strong');
                categoryTitle.classList.add('category-title');
                categoryTitle.innerHTML = categories[key].name;
                this.createAnElement('website-list', categoryTitle, 'div');
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
    },
    /**
     * This function print the result on the screen
     * @param categories
     * @param countries 
    **/
    getTableOfResults(categories, countries) {
        const elements = [document.getElementById('from'), document.getElementById('to')];
        const from = elements[0].options[elements[0].options.selectedIndex].value;
        const to = elements[1].options[elements[1].options.selectedIndex].value;
        const form = document.querySelector('.form');
        form.classList.remove('form--error');

        if (from !== "-1" && to !== "-1") {
            document.querySelector('.is-list-open').classList.add('opened');
            this.getListOfWebsites(categories, countries[from], countries[to]);
            this.setElement('from', from);
            this.setElement('to', to);
            // document.querySelector('.earth').classList.add('position');
            // setTimeout(function() {
            //     document.querySelector('.earth').classList.add('position-2');
            // }, 1000)
        } else {
            form.classList.add('form--error');
        }
    }
}