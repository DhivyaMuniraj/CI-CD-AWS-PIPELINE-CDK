const { Stack, Duration, pipelines } = require('aws-cdk-lib');
const { CodePipeline, ShellStep, CodePipelineSource, ManualApprovalStep } = require('aws-cdk-lib/pipelines');
const { MyPipelineAppStage } = require('./stage');
const { ManualApprovalAction } = require('aws-cdk-lib/aws-codepipeline-actions');

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
  const testingStage = pipeline.addStage(new MyPipelineAppStage(this,"test",{
    env:{
      account:'007221693145',region:'us-east-1'
    }

  }))
  testingStage.addPost(new ManualApprovalStep('Manual approval before production'));
  const prodStage=pipeline.addStage(new MyPipelineAppStage(this,"prod",{
    env:{
      account:'007221693145',region:'us-east-1'
    }
  }))
  }
}

module.exports = { CiCdAwsPipelineCdkStack }
