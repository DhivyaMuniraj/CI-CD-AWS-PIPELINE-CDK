const { Stack, Duration } = require('aws-cdk-lib');
const { CodePipeline, ShellStep, CodePipelineSource } = require('aws-cdk-lib/pipelines');

// const sqs = require('aws-cdk-lib/aws-sqs');

class CiCdAwsPipelineCdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
  const pipeline = new CodePipeline(this,'Pipeline',{
    pipelineName:'MyPipeline',
    synth:new ShellStep('Synth',{
      input:CodePipelineSource.gitHub('DhivyaMuniraj/CI-CD-AWS-PIPELINE-CDK','main'),
      commands:['npm ci','npm run build','npx cdk synth']
    })
  })
  }
}

module.exports = { CiCdAwsPipelineCdkStack }
