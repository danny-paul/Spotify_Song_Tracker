import express from 'express';
import {PORT, API_KEY, CLIENT_SECRET, CLIENT_ID, REDIRECT_URI, SCOPES} from './config/config.js';
import history_router from './routers/history.js';
import main_router from './routers/main.js';
import auth_router from './routers/auth.js';
import {error_router} from './routers/error.js';

import { middleware_test } from './middleware/middleware_test.js';
import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(middleware_test);
app.use('/', main_router);
app.use('/history', history_router);
app.use('/auth', auth_router);

app.use(error_router);

app.listen(PORT, () => {
    console.log(`example listening on port ${process.env.PORT}`);
});
