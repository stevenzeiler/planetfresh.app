require('dotenv').config();

import * as aws from 'aws-sdk';
import * as bluebird from 'bluebird';

const s3 = new aws.S3();

export function getRandomMenu() {

  const bucket = 'planetfresh.app';

  return new Promise((resolve, reject) => {

    s3.listObjects({
      Bucket: bucket,
      Prefix: 'menus/'
    }, (err, resp) => {

      if (err) {

        reject(err);

      } else {

        let i = getRandomInt(resp.Contents.length);

        let randomMenu = resp.Contents[i];

        s3.getSignedUrl('getObject', {
          Bucket: bucket,
          Key: randomMenu.Key
        }, (err, resp) => {

          if (err) {

            reject(err);

          } else {

            resolve(resp);
            
          }
        
        })

      }
    
    });

  });

}

function getRandomInt(max) {

  return Math.floor(Math.random() * Math.floor(max));

}

