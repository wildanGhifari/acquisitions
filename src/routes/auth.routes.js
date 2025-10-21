import express from 'express';

const router = express.Router();

router.post('/sign-up', (req, res) => {
    res.send('POST /api/auth/sign-up endpoint response');
});

router.post('/sign-in', (req, res) => {
    res.send('POST /api/auth/sign-in endpoint response');
});

router.post('/sign-out', (req, res) => {
    res.send('POST /api/auth/sign-out endpoint response');
});

export default router;
