import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import shortUrl from './getShortURL';
import urlChecker from './urlchecker';
import originalURL from './getOriginalURL';
import userInfo from './userInfo';
import validityChecker from './validation';
import cacheCheck from './Caching';
import createdURL from './userCreatedURL';

const app = express();
app.use(cors());
app.use(cookieParser());

app.use(express.static('public'));
app.get('/createdURL', createdURL);
app.get('/accessToken', userInfo);
app.get('/generateshorturl', validityChecker, urlChecker, shortUrl);
app.get('/:id', cacheCheck, originalURL);

app.listen(3000, () => {
  console.log('Server started at 3000'); // eslint-disable-line
});
