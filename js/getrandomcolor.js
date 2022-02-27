var r = document.querySelector(':root');

function getramdoncolor() {
    var c;

    c = '#' + Math.floor(Math.random() * (2 << 23)).toString(16)
    cObj = w3color(c);
    // document.getElementById("colornamDIV").innerHTML = (cObj.toName() || "");
    // document.getElementById("colorhexDIV").innerHTML = cObj.toHexString();
    // document.getElementById("colorrgbDIV").innerHTML = cObj.toRgbString();
    // document.getElementById("colorhslDIV").innerHTML = cObj.toHslString();
    var h = cObj.hue;
    var s = cObj.sat;
    var l = cObj.lightness;

    if (l < 0.1) {
        w2lp = 10;
        mclp = 10;
        sclp = 10;
    } else if (l < 0.3) {
        w2lp = 1.8;
        mclp = 1.4;
        sclp = 1.2;
    } else {
        w2lp = 0.8;
        mclp = 0.6;
        sclp = 0.8;
    }

    if (s < 0.1) {
        w2sp = 10;
        mcsp = 10;
        scsp = 10;
    } else if (s < 0.3) {
        w2sp = 1.9;
        mcsp = 1.4;
        scsp = 0.8;

    } else {
        w2sp = 0.9;
        mcsp = 0.6;
        scsp = 1.2;
    }
    if (l < 0.4) {
        // if (s > 0.8) {
        r.style.setProperty('--textcolor', "white");
        // } else {
        //     r.style.setProperty('--textcolor', "black");
        // }
        r.style.setProperty('--white', "hsl(" + Math.round(h) + "," + Math.round(s * 100) + "%" + "," + Math.round(l * 100) + "%" + ")");
        r.style.setProperty('--white2', "hsl(" + Math.round(h) + "," + Math.round(s * w2sp * 100) + "%" + "," + Math.round(l * w2lp * 100) + "%" + ")");

    } else {
        if (s > 0.4) {
            r.style.setProperty('--textcolor', "white");
        } else {
            r.style.setProperty('--textcolor', "black");
        }
        r.style.setProperty('--white', "hsl(" + Math.round(h) + "," + Math.round(s * 100) + "%" + "," + Math.round(l * 100) + "%" + ")");
        r.style.setProperty('--white2', "hsl(" + Math.round(h) + "," + Math.round(s * w2sp * 100) + "%" + "," + Math.round(l * w2lp * 100) + "%" + ")");

    }

    r.style.setProperty('--maincolor', "hsl(" + Math.round(h) + "," + Math.round(s * mcsp * 100) + "%" + "," + Math.round(l * mclp * 100) + "%" + ")");
    r.style.setProperty('--secondarycolor', "hsl(" + Math.round(h) + "," + Math.round(s * scsp * 100) + "%" + "," + Math.round(l * sclp * 100) + "%" + ")");

    // document.querySelectorAll('details').forEach(d => {
    //     d.open = false
    // });
    // document.getElementById("gypdetails").style.display = "none";
    // document.getElementById("gypramdonrule").innerHTML = fruits.get(Math.floor(Math.random() * 7).toString());

}