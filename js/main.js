function changeColorBackgound(cls, id) {
    let about = {
        font: 'black',
        background: 'aqua'
    };
    let contact = {
        font: 'black',
        background: 'lightcoral'
    };

    let el = document.getElementsByClassName(cls);
    let e = el[0];
    let a = document.getElementById(id);

    if (cls === 'about') {
        a.style.color = about.font;
        e.style.backgroundColor = about.background;
    } else if (cls === 'contact') {
        a.style.color = contact.font;
        e.style.backgroundColor = contact.background;
    }
}

function resetBackgroundColor(cls, id) {
    // console.log(cls);
    let el = document.getElementsByClassName(cls);
    let e = el[0];
    let a = document.getElementById(id);
    e.style.backgroundColor = "black";
    a.style.color = "white";
}