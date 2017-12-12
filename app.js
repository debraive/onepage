
  var Boutique = document.querySelector("#Boutique_1");
  var Depot = document.querySelector('#Depot_1');
  var Contact= document.querySelector('#Contact_1');
  var Boutique_Link= document.querySelector('#Boutique');
  var Depot_Link = document.querySelector("#Depot");
  var contact_Link = document.querySelector("#Contact");

Boutique.addEventListener("click", function (e) {
    e.preventDefault();
    window.scroll({
        top: Boutique_Link.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
  });
  Depot.addEventListener("click",function (e){
    e.preventDefault();
    window.scroll({
        top: Depot_Link.offsetTop,
        left:0,
        behavior:'smooth'
    });
  });
  Contact.addEventListener("click", function(e){
    e.preventDefault ();
    window.scroll({
      top:contact_Link.offsetTop,
      left:0,
      behavior:'smooth'
    });
  });
