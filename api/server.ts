
import * as Hapi from 'hapi';

import * as lib from '../lib';

const server = new Hapi.Server({

  host: '0.0.0.0',

  port: process.env.PORT || 8000
  
});

server.route({

  method: 'GET',

  path: '/menus/random',

  handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {

    let menu = await lib.getRandomMenu();

    return { menu }

  }

})

async function start() {

  try {

    await server.start();

  } catch(error) {

    console.log(error);

    process.exit(1);

  }

}

start();

