var text=document.getElementById('text');
let Participants = [];
var recherche = [];

function getParticipants() {
  

//Obtention de la liste des participants sur firebase
db.collection ('Participant').get ().then (querySnapshot => {

Participants = [];

  querySnapshot.forEach (doc => {
    // doc.data() is never undefined for query doc snapshots


    Participants.push ({
      id: doc.id,
      data: doc.data (),
    });
  });
  //affichage de la liste des participants
  var table = document.getElementById ('tableau');
 table.innerHTML=`<tr>
  <th>Email</th>
  <th>Prénom</th>
  <th>Nom</th>
  <th>Numéro de téléphone</th>
</tr>
`;
  for (var i = 0; i < Participants.length; i++) {
    // Création des éléments HTML pour chaque participant
    var row = table.insertRow ();
    var cellId = row.insertCell ();
    var cellPrenom = row.insertCell ();
    var cellNom = row.insertCell ();
    var cellNumero = row.insertCell ();

    // Remplissage des cellules avec les données du participant courant
    cellId.innerHTML = Participants[i].id;
    cellPrenom.innerHTML = Participants[i].data.prenom;
    cellNom.innerHTML = Participants[i].data.nom;
    cellNumero.innerHTML = Participants[i].data.numero;
  }
});

}


function getParticipant(text) {
  recherche = [];
Participants.map(function(participant) {
  var nom=participant.data.nom.toLowerCase();
  var recup=text.toLowerCase();
  var index = nom.indexOf(recup);

if (index !== -1) {
 return recherche.push(participant);
}
console.log(recherche,index,nom,recup)

})
var table = document.getElementById ('tableau');
table.innerHTML = `<tr>
  <th>Email</th>
  <th>Prénom</th>
  <th>Nom</th>
  <th>Numéro de téléphone</th>
</tr>
`;
for (var i = 0; i < recherche.length; i++) {
  // Création des éléments HTML pour chaque participant
  var row = table.insertRow ();
  var cellId = row.insertCell ();
  var cellPrenom = row.insertCell ();
  var cellNom = row.insertCell ();
  var cellNumero = row.insertCell ();

  // Remplissage des cellules avec les données du participant courant
  cellId.innerHTML = recherche[i].id;
  cellPrenom.innerHTML = recherche[i].data.prenom;
  cellNom.innerHTML = recherche[i].data.nom;
  cellNumero.innerHTML = recherche[i].data.numero;
}

}

getParticipants();
text.addEventListener('input',function() {
if (text.value.length<1) {

getParticipants();
  } else {
    getParticipant(text.value);
  }
})



