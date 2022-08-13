var speed = 10;

function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  len = String(document.getElementById(id).innerHTML)
  incNbrRec(0, endNbr, elt, Math.pow(10, len.length-2));
  console.log(Math.pow(10, len.length))
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt, d) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i + Math.round(d), endNbr, elt, d);
    }, speed);
  }
}


incEltNbr("nbr1");
incEltNbr("nbr2");
incEltNbr("nbr3");
incEltNbr("nbr4");
