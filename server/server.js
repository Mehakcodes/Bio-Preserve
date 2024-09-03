const express = require('express');
const cors = require('cors');
const {config, dbConfig:prisma} = require('./config/index');
const mainRouter = require('./routes/index');

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true,
        
    }
));
app.use(cookieParser());
app.use('/api',mainRouter);


app.listen(config.port, ()=>{
    console.log(`Server is running on port ${config.port}`);
});


