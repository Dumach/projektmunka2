import PocketBase from 'pocketbase';

// New Pocketbase instance
const pb = new PocketBase('http://127.0.0.1:8090');

// Login user
const authData = await pb.collection('users').authWithPassword('johndoe@testmail.com', '12345678');

// List first 50 users

const users = await pb.collection('users').getList(1, 50);
users.items.forEach(user => {
  console.log(`Email: ${user.email}`);
  console.log(`Created at: ${user.created}`)
})

// List the players name that plays a game
const game = await pb.collection("games").getList(1, 30, { expand: 'players,users.name', })
console.log(game.items[0].expand.players[0].name)

// Check if specified game is running
const isRunning = await pb.collection('games').getList(1, 10, )
console.log(isRunning.items)

// Logout user
pb.authStore.clear();