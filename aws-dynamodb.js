
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: 'AKIATDDDCUVTW5WFL5NW',
  secretAccessKey: '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',
})

const dynamodb = new AWS.DynamoDB.DocumentClient();

const TableName = 'myfirst_dynamodb';

const createItem = async (item) => {
  const params = {
    TableName,
    Item: item
  }
  dynamodb.put(params, (err, data) => {
    if (err) console.error('error', err);
    else console.log('data', data);
  })
}

const readItem = async (key) => {
  const params = {
    TableName,
    Key: key
  }
  dynamodb.get(params, (err, data) => {
    if (err) console.error('error', err);
    else console.log('data', data.Item);
  })

}
const updateItem = async(key,updateExpress,expressAttribute) => {
  const params = {
    TableName,
    Key: key,
    UpdateExpression:updateExpress,
    ExpressionAttributeValues:expressAttribute,
    ReturnValues:'UPDATED_NEW'
  }

  dynamodb.update(params, (err, data) => {
    if (err) console.error('error', err);
    else console.log('data', data.Attributes);
  })

}

const deleteItem=(key)=>{
  const params = {
    TableName,
    Key: key
  }
  dynamodb.delete(params,(err,data)=>{
    if (err) console.error('error', err)
    else console.log('data', data.Attributes)
  })
}

const params={
  id:'1',
  name:'vijay',
  lname:'raj'
}
// createItem(params)
// deleteItem({id:'update vijayaraj'})
// readItem({id:'1'})
// updateItem({id:'test-vijayaraj'},"set lname=:value",{':value':'jnaksdn'})
