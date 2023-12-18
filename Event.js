const EventEmitter = require('events');

class UserEventEmitter extends EventEmitter {}


const userEventEmitter = new UserEventEmitter();

// Listen for userLoggedIn event
userEventEmitter.on('userLoggedIn', userId => {
    console.log(`${new Date().toISOString()}: USER_${userId} logged in`);
});

// Function to simulate a user login
function simulateUserLogin() {
    const userId = Math.floor( Math.random() * 1000 ); // Generate a random user ID
    userEventEmitter.emit( 'userLoggedIn', userId ); // Emit the userLoggedIn event

    // Schedule the next user login
    setTimeout(simulateUserLogin, Math.random() * 1900 + 100); // Random delay between 0.1 to 2 seconds
}

// Start the simulation
simulateUserLogin();
