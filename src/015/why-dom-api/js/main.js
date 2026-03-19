import '@picocss/pico/css/pico.blue.min.css';

const theForm = document.querySelector('form');

theForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const html = evt.target.elements.htmlContent.value.trim();
    const container = document.getElementById('output');
    if(html) {
        container.innerHTML = html; // 💣 DANGEROUS to allow un-sanitized HTML to be inserted/injected into our page. It's a security risk.
    } else {
        const template = document.getElementById('default-content');
        const clone = template.content.cloneNode(true);

        // Once I have a copy of the template, I can programmatically
        // modify its contents however I need.
        const asideEl = clone.querySelector('aside');
        asideEl.innerText = `Today is ${new Date().toDateString()}`;

        container.innerHTML = '';
        container.appendChild(clone);
    }
});

theForm.addEventListener('click', function(evt) {
    if(evt.target.tagName === 'BUTTON' && evt.target.type === 'button') {
        let value = evt.target.parentElement.querySelector('output').value;
        document.querySelector('input').value = value;
    }
});
