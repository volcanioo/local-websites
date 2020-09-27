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
    getWebsitesByCategory(to, from, category) {
        const filteredTo = {...to.websites.filter((item) => item.category.toString().includes(category))};
        const filteredFrom = {...from.websites.filter((item) => item.category.toString().includes(category))};
        return [filteredTo, filteredFrom];
    }
}