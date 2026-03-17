export function presentData(data, isCached) {
    if (isCached) {
        document.getElementById('notice').innerText = 'Live service unavailable, showing archived list.';
    } else {
        document.getElementById('notice').innerText = '';
    }
    const template = document.getElementById('profile');
    const guestList = document.getElementById('guest-list');
    guestList.innerHTML = '';
    data.forEach(person => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.avatar').src = person.thumb;
        clone.querySelector('.first-name').innerText = person.name.first;
        clone.querySelector('.last-name').innerText = person.name.last;
        const genderShort = person.gender === 'male' ? 'M' : 'F';
        const ageHtml = `<strong>${person.dob.age}</strong>`;
        clone.querySelector('.gender-age').innerHTML = `${genderShort} — Age: ${ageHtml}`;
        guestList.appendChild(clone);
    });
}