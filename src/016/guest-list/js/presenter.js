export function presentData(data, isCached) {
    if (isCached) {
        document.getElementById('notice').innerText = 'Live service unavailable, showing archived list.';
    } else {
        document.getElementById('notice').innerText = '';
    }
    const template = document.getElementById('profile'); // <template>
    const guestList = document.getElementById('guest-list');
    guestList.innerHTML = '';
    data.forEach(person => {
        // Create a new copy (clone) of the template with all its contents
        const clone = template.content.cloneNode(true);
        // Populate the information in the template with the data
        // about the person
        clone.querySelector('.avatar').src = person.thumb;
        clone.querySelector('.first-name').innerText = person.name.first;
        clone.querySelector('.last-name').innerText = person.name.last;
        const genderShort = person.gender === 'male' ? 'M' : 'F';
        const ageHtml = `<strong>${person.dob.age}</strong>`;
        clone.querySelector('.gender-age').innerHTML = `${genderShort} — Age: ${ageHtml}`;

        const textInfo = clone.querySelector('.info'); // <div class="info">
        const extraInfo = document.createElement('div');
        const text = `${person.home.city}, ${person.home.prov}`;
        const textNode = document.createTextNode(text);
        // Assemble this new information
        extraInfo.appendChild(textNode);
        textInfo.appendChild(extraInfo);
        
        guestList.appendChild(clone);
    });
}