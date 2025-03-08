const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1884');

client.on('connect', () => {
    console.log('Publisher connected to MQTT broker');
    setInterval(() => {
        const message = JSON.stringify({
            machineId: 'M-101',
            temperature: Math.floor(Math.random() * 100),
            status: 'running',
            timestamp: new Date()
        });
        console.log(`Publishing: ${message}`);
        client.publish('factory/machine/status', message);
    }, 5000); // Publish every 5 seconds
});
