const colors = ["Red", "Green", "Blue"]
colors.forEach((color) => {
    //generate id
    const id = `color-${color}`;

    // create a label 
    const label = document.createElement('label');
    label.setAttribute("for", id);

    // create a checkbox 
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "color";
    checkbox.value = color;
    checkbox.id = id;

    // place the checkbox inside a label
    label.appendChild(checkbox);

    // create a text node
    label.appendChild(document.createTextNode(color));

    // add the label to the root 
    document.querySelector('#container').appendChild(label)

})


const colors2 = ["Red","Green","Blue"];
        const html = colors2.map(color => `<label for="color-${color}">
                <input type="checkbox" name="color" id="color-${color}" value="${color}"> ${color}
            </label>`
        ).join(' ');
       document.querySelector("#container2").innerHTML = html;