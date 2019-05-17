function changeColor() {
    var trueOrFalse = true;
    var input = document.documentElement.querySelector(".div1");
    input.classList.toggle("colorTomato");
}



//classList toggle ukljucimo ili iskljucimo klasu
//drugo dugme prekine funkciju da prvo dugme ne radi vise nista.
//var koja nosi true ili false. Na pocetku je true, ako je false ne menjamo boju
//nosi stanje da li moze da se klikce ili ne. 
// className --> da setujemo clasu

//elem.classList.toggle("class") 