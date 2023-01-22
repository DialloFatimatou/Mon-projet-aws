var nom = document.getElementById ('nompart');
var prenom = document.getElementById ('pnompart');
var email = document.getElementById ('emailpart');
var numero = document.getElementById ('numpart');
var enregistrer = document.getElementById ('enreg');

enregistrer.addEventListener ('click', function (e) {
  e.preventDefault ();
  db
    .collection ('Participant')
    .doc (email.value)
    .set ({
      nom: nom.value,
      prenom: prenom.value,
      numero: numero.value,
    })
    .then (() => {
      console.log ('Document successfully written!');
    })
    .catch (error => {
      console.error ('Error writing document: ', error);
    });

  //     db
  //   .collection ('Participant')
  //   .add ({
  //     nom: nom.value,
  //     prenom: prenom.value,
  //     email:email.value,
  //     numero:numero.value
  //   })
  //   .then (docRef => {
  //     console.log ('Document written with ID: ', docRef.id);
  //   })
  //   .catch (error => {
  //     console.error ('Error adding document: ', error);
  //   });
});
