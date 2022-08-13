var speed = 10;

function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  len = String(document.getElementById(id).innerHTML)
  incNbrRec(0, endNbr, elt, len.length);
}

function incNbrRec(i, endNbr, elt, d) {
  if (d>=0)
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i+ Math.pow(10, d), endNbr, elt, d);
    }, speed);
  } else {
    setTimeout( function(){
      incNbrRec(i- Math.pow(10, d), endNbr, elt, d-1)
    }, speed);
  }
}


incEltNbr("nbr1");
incEltNbr("nbr2");
incEltNbr("nbr3");
incEltNbr("nbr4");
