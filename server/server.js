const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const {config, dbConfig:prisma} = require('./config/index');
console.log(config.port);
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true,
        
    }
));
app.use(cookieParser());
app.listen(config.port, ()=>{
    console.log(`Server is running on port ${config.port}`);
});



// const port = 5000;

// const app = express();

// async function CreateNewUser() {
//     const newUser = await prisma.users.create({
//         data: {
//             name: 'Alice2',
//             email: 'alice2@example.com',
//             mobile_number: '12345790',
//             password: 'password',
//         }
//     });

//     console.log(newUser);

// }

// async function GetUser() {
//     const allUsers = await prisma.users.findUnique(
//         {
//             where: {
//                 email:'alice@example.com',
//                 password: 'password'
//             }
//         }
//     );
//     console.log(allUsers);
// }



// // CreateNewUser().catch(e => {
// //     console.log("error");
// // })

// // GetUser().catch(e => {
// //     throw e
// // })

