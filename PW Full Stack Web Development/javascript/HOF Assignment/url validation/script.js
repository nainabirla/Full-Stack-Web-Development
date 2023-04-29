function isValidURL(str) {
    if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

isValidURL("https://www.nainabirla100.com");
isValidURL("https://www.nainabirla200@gmail.com");
