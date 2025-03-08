# mqtt-basic

## 🫠 Set Up RabbitMQ Broker Locally

### 🚀 Install RabbitMQ using Docker
```sh
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 -p 1884:1883 rabbitmq:management
```

#### Port Mappings:
- `5672` → AMQP (Advanced Messaging)
- `15672` → RabbitMQ Web UI ([http://localhost:15672](http://localhost:15672))
- `1884` → MQTT (RabbitMQ MQTT Broker)

### 🏰 Enable MQTT Plugin in RabbitMQ

#### Access RabbitMQ UI:
[http://localhost:15672](http://localhost:15672)

#### Login Credentials:
- **Username:** guest
- **Password:** guest

#### Enable Plugin:
1. Go to **Admin** → **Plugins**
2. Enable `rabbitmq_mqtt`

### 📌 If MQTT Plugin is missing, enable manually:
```sh
docker exec -it rabbitmq rabbitmq-plugins enable rabbitmq_mqtt
```

## ⚙️ Set Up MQTT Publisher & Subscriber with Node.js

### 📚 Install Dependencies
```sh
npm install
```

### 📤 Publisher (Sends messages to RabbitMQ MQTT broker)
- Publishes machine data every 5 seconds.

### 📥 Subscriber (Listens for messages)
- Subscribes to `factory/machine/status`.

## ▶️ Run the MQTT Publisher & Subscriber

### 1️⃣ Start Subscriber first (listen for messages):
```sh
node subscriber.js
```

### 2️⃣ Start Publisher (send messages):
```sh
node publisher.js
```

✅ Now RabbitMQ handles MQTT messages for real-time factory monitoring. 🎯

## 🔗 Useful Commands

### 🛠 Stop RabbitMQ Container:
```sh
docker stop rabbitmq
```

### 🚀 Restart RabbitMQ Container:
```sh
docker start rabbitmq
```

### 🛢 Remove RabbitMQ Container:
```sh
docker rm -f rabbitmq
```
