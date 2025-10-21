import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import logger from '#config/logger.js';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    morgan('combined', {
        stream: {
            write: message => logger.info(message.trim()),
        },
    })
);

app.get('/', (req, res) => {
    logger.info('Acquisitions Service received a request.');
    res.status(200).send('Hello, from Acquisitions Service!');
});

export default app;
