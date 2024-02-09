// As its name, CREATE new element.
const list = document.createElement('ul');
const info = document.createElement('p');

// As its name, SELECT an element.
// const html = document.quarySelector('html'); // ERROR
const html = document.querySelector('html');

// CREATE text into info constant. 
info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';


// ADD elements into html.
document.body.appendChild(info);
document.body.appendChild(list);

// UPDATE the webpage because of a click.
html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('What content do you want the list item to have?');

    // CREATE a <li> element which its content based on
    // listContent.
    listItem.textContent = listContent;
    // ADD the <li> element into the <ul> element.
    list.appendChild(listItem);

    // Maybe e means element.
    listItem.onclick = (e) => {
        e.stopPropagation();
        const listContent = prompt('Enter new ' +
            'content for your list item');
        this.textContent = listContent;
    };
};
