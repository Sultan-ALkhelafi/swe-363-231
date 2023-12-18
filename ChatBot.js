const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Predefined set of questions and answers
const responses = {
    "how are you?": "I'm good, thank you!",
    "what is your name?": "I'm a Node.js chatbot.",
    "what can you do?": "I can chat with you.",
    // Add more predefined questions and responses as needed
};

// Function to get the response
const getResponse = (question) => {
    question = question.toLowerCase().trim();
    return responses[question] || "Sorry, I don't understand that.";
};

// Function to start the chat
const startChat = () => {
    rl.question('Ask me something: ', (userInput) => {
        if (userInput.toLowerCase().trim() === 'exit' || userInput.toLowerCase().trim() === 'quit') {
            console.log('Goodbye!');
            rl.close();
        } else {
            const response = getResponse(userInput);
            console.log(response);
            startChat(); // Ask for input again
        }
    });
};

// Start the chatbot interaction
startChat();
