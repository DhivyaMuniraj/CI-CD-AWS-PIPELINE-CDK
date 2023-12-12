#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { CiCdAwsPipelineCdkStack } = require('../lib/ci-cd-aws-pipeline-cdk-stack');

const app = new cdk.App();
new CiCdAwsPipelineCdkStack(app, 'CiCdAwsPipelineCdkStack', {
  env:{
    account:'007221693145',
    region:'us-east-1'
  }
});
