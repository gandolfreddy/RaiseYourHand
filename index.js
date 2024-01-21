import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

/*
    Dummy data:

    const classroomInfo = {
        "356157": [
                {
                    "socketID": Null,
                    "name": "王大小",
                    "isInClassroom": false,
                    "queueNo": -1,
                    "done": false,
                },
                {
                    "socketID": 212937a9f422,
                    "name": "張中大",
                    "isInClassroom": true,
                    "queueNo": -1,
                    "done": false,
                },
                {
                    "socketID": 21ba37e23422,
                    "name": "李小中",
                    "isInClassroom": true,
                    "queueNo": 0,
                    "done": false,
                },
                {
                    "socketID": ffba37e23422,
                    "name": "王小綠",
                    "isInClassroom": true,
                    "queueNo": 1,
                    "done": true,
                },
            ],
    }

*/


/* 進入教室前模組 */
function verifyClassroomID() { }

function getAvailableClassroom() { }

function createRandomClassroomID() { }

function createClassroom() { }

/* 進入教室後模組 */
function updateStudentStatus() { }

function getQueue() { }

function checkMissions() { }

function closeClassroom() { }


/* express routes */
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 學生進入教室後的頁面
app.get('/student/:id', (req, res) => {
    res.sendFile(`${__dirname}/views/student.html`);
});

// 老師進入教室後的頁面
app.get('/TEACHer/:id', (req, res) => {
    res.sendFile(__dirname + '/views/TEACHer.html');
});

// 老師建立新教室的頁面
app.get('/new-classroom', (req, res) => {
    res.sendFile(__dirname + '/views/newClassroom.html');
});

/* Socket.io */
io.on("connection", (socket) => {
    console.log(`目前 socket id: ${socket.id}`);
});

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
