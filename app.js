import fs from 'fs';
import { EventEmitter } from 'events';
import { createServer } from 'http';

async function readWriteFile() {
    const filePath = './example.txt';
    const content = 'Hello, this is some text for the file.';

    try {
        await fs.promises.writeFile(filePath, content);
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log('File content:', data);
    } catch (error) {
        console.error('File operation error:', error);
    }
}

const eventEmitter = new EventEmitter();
eventEmitter.on('start', () => {
    console.log('Start event triggered!');
});
eventEmitter.emit('start');

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

readWriteFile();
