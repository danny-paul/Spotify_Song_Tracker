import express from 'express';
import {PORT, CLIENT_ID, CLIENT_SECRET} from './config/config.js';

console.log(CLIENT_SECRET);
console.log(CLIENT_ID);

const app = express();

app.get('/', (req, res) => {
    res.send(generate_random_string(10));
});

app.listen(PORT, () => {
    console.log(`example listening on port ${process.env.PORT}`);
});


function generate_random_string(num) {
    let tmp_str = '';
    let to_lower = 20;
    let ascii_val = 0;

    for (let i = 0; i < num; i++) {
        //ASCII range 65-90 UC, 97-122 LC
        to_lower = Math.random() < .5 ? 32 : 0;
        ascii_val = Math.floor(Math.random() * 26) + (65 + to_lower);
        tmp_str += String.fromCharCode(ascii_val);
    }

    return tmp_str;
}