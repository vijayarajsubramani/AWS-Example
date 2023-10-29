import AWS from 'aws-sdk';
import fs from 'fs';

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: '',
  secretAccessKey: '',
})

const s3 = new AWS.S3();

const bucktName='myfirstfileupload';
const key='upload/research-and-development-survey-2022.csv';

const csvfilePath='D:/React/AWSLAMDA/upload/research-and-development-survey-2022.csv'

const filecontent=fs.readFileSync(csvfilePath);

const params={
    Bucket:bucktName,
    Key:key,
    Body:filecontent
}
s3.upload(params,(err,data)=>{
    if(err) console.error('err',err)
    else console.log('data',data.Location)
})





