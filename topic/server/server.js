import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
const cors = require('cors');
import fs from 'fs';

import Topic from '../src/Topic';

const server = express();
const port = process.env.PORT || 8085;

server.use(cors());

function getPathToEmbedAssets() {
  const filesPath = {};
  const assetsPath = '/build/umd';
  fs.readdirSync(`${__dirname}/../${assetsPath}`)
    .forEach(fileName => {
      if (fileName.indexOf('.css') !== -1) {
        filesPath['css'] = `${assetsPath}/${fileName}`;
      }
      if (fileName.indexOf('.js') !== -1) {
        filesPath['js'] = `${assetsPath}/${fileName}`;
      }
    });

  return filesPath;
}

server.use('/build', express.static(`${__dirname}/../build`));

server.get('/api/assets', (req, res) => {
  res.json(getPathToEmbedAssets());
});

server.get('/render', (req, res) => {
  const topic = renderToString(React.createElement(Topic, null));
  res.send({
    topic,
  });
});

server.use(express.static('build'));

server.listen(port, () => {
  console.log(`Topic app listening on port ${port}`);
});