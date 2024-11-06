/*Oppgåve tekst:

Lag en conditional som sjekker om userName eksisterer (har innhold), at brukeren er over 18, og at user ikke er blocked.
Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".*/

/*for testing om programmet kjøyrer i det heile:
console.log("Script is running...");*/

//Variables:

const userName = "Tom";
const userAge = 18;

let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = "";

//Check username exists, check age, check if username blocked:

if (!userName) {
  console.log("Error! No username found.");
} else if (userAge < 18) {
  console.log("Error! User is not old enough");
} else if (userIsBlocked) {
  console.log("Error! User is blocked");
  goToPage = "/blocked";

  // Check if admin or user:
} else {
  if (userIsAdmin) {
    goToPage = "/admin";
    console.log("User is admin. Redirecting to admin homepage.");
  } else {
    userIsLoggedIn = true;
    goToPage = "/home";
    console.log("Welcome back! Rederecting to home page.");
  }
}

//Check if sendt to the correct site
console.log(goToPage);
