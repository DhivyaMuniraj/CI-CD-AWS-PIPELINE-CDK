const cdk = require('aws-cdk-lib');
const { Function, InlineCode, Runtime,Code } = require('aws-cdk-lib/aws-lambda');
const path =require('path')
class MyLambdaStack extends cdk.Stack {
    constructor(scope, id, props,stageName) {
      super(scope, id, props);

      new Function(this, 'LambdaFunction', {
        runtime: Runtime.NODEJS_18_X,
        handler: 'handler.handler',
        code: Code.fromAssest(path.join(__dirname,'lambda')),
        environment:{"stageName":stageName}//inputting stage name
      });
    }
}

module.exports = { MyLambdaStack }