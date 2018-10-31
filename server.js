const login = require('facebook-chat-api');

const reminderhelper = require('./helpers/reminderhelper');
const reminder = new reminderhelper();

const FB_EMAIL = 'some@thing.dk';
const FB_PASSWORD = 'somepassword';
 
// Create simple echo bot
login({email: FB_EMAIL, password: FB_PASSWORD}, (err, api) => {
    if(err) return console.error(err);
 
    api.listen((err, message) => {
    	messageBody = message.body.toLowerCase();

    	if (messageBody.includes('hjælp')) {
    		api.sendMessage("Jeg kan hjælpe med at ...", message.threadID);

    	} else if (messageBody.includes('gem mig')) {

    	}else if (messageBody.includes('mind mig')) {
    		const answer = reminder.set(messageBody);
    		api.sendMessage(answer, message.threadID);
    	}

        api.sendMessage(message.body, message.threadID);
    });
});
