import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

const PORT=5000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})