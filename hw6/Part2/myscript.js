function submitFrom() {
    let password = document.getElementById('password').value;
    let rePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
    if(String(password).match(rePass)) {
        alert('You enter correct password');
    } else {
        alert('Please enter valid password.');
    }

    let website = document.getElementById('website').value;
    let reWeb = /^(http|https):\/\/[^ "]+$/;

    if(String(website).match(reWeb)) {
        alert('Correct url.');
    } else {
        alert('Please enter valid url.');
    }
}