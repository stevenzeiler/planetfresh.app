#!/usr/bin/env ts-node

const program = require('commander');

import * as lib from '../lib';

program
  .command('getrandommenu')
  .action(async () => {

    let menu = await lib.getRandomMenu();

    console.log(menu);

  });

program.parse(process.argv);

