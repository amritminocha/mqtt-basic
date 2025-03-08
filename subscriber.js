const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1884');

client.on('connect', () => {
    console.log('Subscriber connected to MQTT broker');
    client.subscribe('factory/machine/status', (err) => {
        if (!err) {
            console.log('Subscribed to factory/machine/status');
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`Received message on ${topic}: ${message.toString()}`);
});
