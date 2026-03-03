// Enter JavaScript for the exercise here...
// [name=toggle]
// [name=message]

const toggleAll = document.querySelector('[name=toggle]');
toggleAll.addEventListener('change', function(evt) {
    const target = evt.target;
    console.log(`main toggle is ${target.checked ? 'on' : 'off'}`);

    const allCheckboxes = document.querySelectorAll('[name=message');
    console.log(allCheckboxes);

    let index = 0;
    while(index < allCheckboxes.length) {
        // How would you change the following line so that
        // it toggles the individual checkboxes instead of
        // making all the checkboxes match the toggleAll's
        // checked state?
        // allCheckboxes[index].checked = target.checked;
        allCheckboxes[index].checked = !allCheckboxes[index].checked;
        //                             |\__________________________/
        //                           NOT(       true/false         )
        //                          <==       false/true
        index += 1; // index = index + 1
    }
});


document
    .getElementById('search') // <form id="search" >
    .addEventListener('submit', function(evt) {
        evt.preventDefault(); // Always remember this for submit events
        const searchText = evt.target.elements.searchText.value.toLowerCase().trim();
        // debugger // The debugger triggers only when the browser dev tools is open
        if(searchText) {
            const allCells = document.querySelectorAll('tbody tr td:last-child'); // NodeList <td>
            // All NodeList objects have a .forEach() method
            allCells.forEach(cell => {
                // cell is a <td> element
                if(cell.innerText.toLowerCase().includes(searchText)) {
                    cell.parentElement.classList.add('selected');
                    // The parent of the <td> is the <tr> element
                } else {
                    cell.parentElement.classList.remove('selected');
                }
            });
        } else {
            // TODO: Remove the .selected class from all the rows of the table body
        }
    });