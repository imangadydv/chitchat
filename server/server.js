import express from 'express';
import dotenv from 'dotenv';
import chats from './data/data.js';
import cors from 'cors';
const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);
app.get('/api/chat', (req, res) => {
    res.send(chats);
    }
);
app.get('/api/chat/:id', (req, res) => {
    const id = req.params.id;
    const chat = chats.find((c) => c._id === id);
    if (chat) {
        res.send(chat);
    } else {
        res.status(404).send({ message: 'Chat Not Found' });
    }
    }
);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);