import AWS from 'aws-sdk';
import csvParser from 'csv-parser';
import stream from 'stream'

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: 'AKIATDDDCUVTW5WFL5NW',
  secretAccessKey: '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',
})

const s3 = new AWS.S3();

const bucktName = 'myfirstfileupload';
const key = 'upload/research-and-development-survey-2022.csv';

const handler = () => {
  const params = {
    Bucket: bucktName,
    Key: key,
  }

  const jsonresult = [];

  const csvStream = csvParser().on('data', (row) => {
    jsonresult.push(row)
  }).on('end', () => {
    console.log('jsondata', jsonresult)
  })

  s3.getObject(params, (err, data) => {
    if (err) console.error('err', err)
    else {
      const csvdata = data.Body.toString('utf-8');
      stream.Readable.from(csvdata).pipe(csvStream)
    }
  })
}
handler();







