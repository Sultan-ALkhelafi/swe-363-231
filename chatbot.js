const readline = require('readline');

// Create readline interface for stdin and stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Predefined set of questions and answers
const responses = {
    "how are you?": "I'm good, thank you!",
    "what is your name?": "I'm a Node.js chatbot.",
    "what do you do?": "I respond to your questions with predefined answers."
};

// Function to get a response from the chatbot
const getResponse = (question) => {
    question = question.toLowerCase().trim();
    return responses[question] || "Sorry, I don't understand that question.";
};

// Function to start the chatbot interaction
const startChat = () => {
    rl.question('Ask me a question: ', (input) => {
        if(input.toLowerCase().trim() === 'exit' || input.toLowerCase().trim() === 'quit') {
            console.log('Goodbye!');
            rl.close();
            return;
        }

        const response = getResponse(input);
        console.log(response);

        // Prompt for another question
        startChat();
    });
};

// Start the chatbot
startChat();
