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
