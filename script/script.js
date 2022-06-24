var skills1Txt = document.querySelectorAll('.skill h1');
var circal = Array.from(document.querySelectorAll('.border'));
var circalTxt = Array.from(document.querySelectorAll('.prog .text p:nth-child(2)'));
var skills1Prog = Array.from(document.querySelectorAll('.skill span span'));
for (var i = 0; i < skills1Txt.length; i = i + 1) {
    skills1Prog[i].style.width = "".concat(skills1Txt[i].textContent);
}
var raduis = circal[0].r.baseVal.value;
for (var i = 0; i < circalTxt.length; i = i + 1) {
    //here
    var lolo = raduis * 2 * Math.PI;
    var lala = Number(lolo) - (Number(circalTxt[i].textContent.replace('%', '')) / 100) * lolo;
    circal[i].style.strokeDashoffset = "".concat(lala);
    circal[i].style.strokeDasharray = "".concat(lolo);
}
