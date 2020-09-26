export default {
    /**
     * Set an element's value by data-model
     * @param modalName
     * @param content
    **/
    setElement(modalName, content) {
        const elements = document.querySelectorAll('*[data-model='+modalName+']');
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
        const selects = document.querySelectorAll('*[data-model='+modalName+']');
        for (let i = 0; i < selects.length; i++) {
            for (let j = 0; j < Object.keys(object).length; j++) {
                const option = document.createElement("option");
                option.text = Object.values(object)[j][property];
                selects[i].add(option);
            }
        }
    }
}