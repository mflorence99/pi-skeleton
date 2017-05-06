import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as fs from 'fs';
import * as gpio from './gpio';

import { config } from './config';
import { content } from 'pi-lib/server/content';
import { cors } from 'pi-lib/server/cors';
import { deploy } from 'pi-lib/server/deploy';
import { isalive } from 'pi-lib/server/isalive';

console.log(config);

const app: express.Application = express();

const cert = {
  key  : fs.readFileSync(`${__dirname}/key.pem`),
  ca   : fs.readFileSync(`${__dirname}/csr.pem`),
  cert : fs.readFileSync(`${__dirname}/cert.pem`)
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);

app.get('/isalive', isalive);
gpio.routes(app);
app.get('*', content);

deploy(app, 3002, cert);
gpio.ws(app, 4002, cert);
