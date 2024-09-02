import * as mqtt from 'mqtt';

export class MQTTClient {
    private client: mqtt.MqttClient | null = null;
    private readonly host: string;
    private readonly port: number;
    private readonly options: mqtt.IClientOptions;
    constructor(host: string, port: number, options: mqtt.IClientOptions) {
        this.host = host;
        this.port = port;
        this.options = options || {};
    }
    public connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.client) {
                reject(new Error('Already connected'));
                return;
            }

            this.client = mqtt.connect(`mqtt://${this.host}:${this.port}`, this.options);

            this.client.on('connect', () => {
                console.log('Connected to MQTT broker');
                resolve();
            });

            this.client.on('error', (error) => {
                console.error('Connection error:', error);
                reject(error);
            });
        });
    }
    public disconnect(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.client) {
                reject(new Error('Not connected'));
                return;
            }

            this.client.end(false, () => {
                console.log('Disconnected from MQTT broker');
                this.client = null;
                resolve();
            });

            this.client.on('error', (error) => {
                console.error('Disconnection error:', error);
                reject(error);
            });
        });
    }
    public subscribe(topic: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.client) {
                reject(new Error('Not connected'));
                return;
            }

            this.client.subscribe(topic, (error, granted) => {
                if (error) {
                    console.error('Subscription error:', error);
                    reject(error);
                } else if (granted && granted.length > 0) {
                    console.log(`Subscribed to topic: ${granted[0].topic}`);
                    resolve();
                } else {
                    reject(new Error('Subscription granted information is missing'));
                }
            });
        });
    }

    public unsubscribe(topic: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.client) {
                reject(new Error('Not connected'));
                return;
            }

            this.client.unsubscribe(topic, (error) => {
                if (error) {
                    console.error('Unsubscription error:', error);
                    reject(error);
                } else {
                    console.log(`Unsubscribed from topic: ${topic}`);
                    resolve();
                }
            });
        });
    }

    public publish(topic: string, message: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.client) {
                reject(new Error('Not connected'));
                return;
            }

            this.client.publish(topic, message, (error) => {
                if (error) {
                    console.error('Publish error:', error);
                    reject(error);
                } else {
                    console.log(`Message published to topic: ${topic}`);
                    resolve();
                }
            });
        });
    }
    public onMessage(callback: (topic: string, message: Buffer) => void): void {
        if (!this.client) {
            throw new Error('Not connected');
        }

        this.client.on('message', (topic, message) => {
            callback(topic, message);
        });
    }
}