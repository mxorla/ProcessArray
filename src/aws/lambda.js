const AWS = require('aws-sdk')
//TODO: move to secrets
const awslambda = new AWS.Lambda()

async function lambda(array) {
    return new Promise((resolve, reject) => {
        const params = {
            FunctionName: 'processArray',
            Payload: JSON.stringify(array)
        }
        awslambda.invoke(params, (err, data) => {
            if (err) reject(err);
            else {
                const response = JSON.parse(data.Payload)
                resolve(response.body);
            }
        });
    });
}

module.exports = lambda;
