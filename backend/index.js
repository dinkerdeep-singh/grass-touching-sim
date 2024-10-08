const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://grass-touching-sim.vercel.app'
}));

app.use('/api/v1', rootRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));