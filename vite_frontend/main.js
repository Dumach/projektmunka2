import './style.css'
import PocketBase from 'pocketbase';

const loginBtn = document.getElementById("login");
const loginEl = document.getElementById("login-check");
const subscribeBtn = document.getElementById("subscribe");
const unSubscribeBtn = document.getElementById("unsubscribe");
const messageEl = document.getElementById("message");

const pb = new PocketBase('http://127.0.0.1:8090');

loginBtn.addEventListener("click", async () =>{
  // authenticate
  await pb.collection('users').authWithPassword('johndoe@testmail.com', '12345678');
  if(pb.authStore.isValid){
    console.log(`Successful login: ${pb.authStore.token}`);
    loginEl.innerHTML = "<p>Successful login!</p>";
    loginEl.innerHTML += '<p>Nyomd meg a "subscribe" gombot és változtass meg egy rekordot a "games" táblában</p>';
  }
  else{
    console.log(`Error: ${pb.authStore.token}`);
    loginEl.innerHTML = "<p>Unsuccessful login!</p>";
  }
});

subscribeBtn.addEventListener("click", async () => {
  // Subscribe to changes in any record in the collection
  console.log("Listening...")
  pb.collection('games').subscribe('*', function (e) {
    messageEl.innerHTML = "<p>Nézd meg a konzol logot több információért</p>";
    messageEl.innerHTML += `<p>Fut-e a játék :  ${e.record.isRunning}</p>`;
    messageEl.innerHTML += `<p>Játékosok email-jei:</p><ul>`;
    e.record.expand.players.forEach(element => {
      messageEl.innerHTML += `<li>${element.name} :  <b>${element.email}</b></li>`;
    });
    messageEl.innerHTML += `</ul>`;
    console.log(e.action);
    console.log(e.record);
    if(e.record.isRunning){
      alert("Indul a játék!")
    }
  }, {'expand': 'players,users.name'});
});

unSubscribeBtn.addEventListener("click", async () => {
  // Unsubscribe
  //pb.collection('example').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
  //pb.collection('example').unsubscribe('*'); // remove all '*' topic subscriptions
  pb.collection('games').unsubscribe(); // remove all subscriptions in the collection
  messageEl.textContent = "Leiratkozva"
});
