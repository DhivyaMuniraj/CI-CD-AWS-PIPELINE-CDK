const cdk =require('aws-cdk-lib')
const{Construct}=require('constructs')
const {MyLambaStack}=require('./lambda-stack');
export class MyPipelineAppStage extends cdk.stage{
    constructor(scope,stageName,pros){
super(scope,stageName,pros);
const lambaStack=new MyLambaStack(this,'LambaStack',stageName)
    }
}