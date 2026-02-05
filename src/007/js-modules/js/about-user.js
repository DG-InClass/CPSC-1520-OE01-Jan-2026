// 🐞 Yup. There's a bug with mixing prompt() UI and updating the progress. But we won't worry about that for this demo....
const aboutUser = function(progressElement, contentOutput) {
    const name = prompt('Please enter your full name');
    progressElement.value = '35';
    const email = prompt('Please enter your email');
    progressElement.value = '70';
    const agree = confirm('Do you agree to the terms of this site?');
    progressElement.value = '100';

    contentOutput.innerHTML = `Hello <mark>${name}</mark>.`;
}

export { aboutUser } // exporting functions, etc. makes those public
