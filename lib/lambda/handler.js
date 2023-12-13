export const handler = async (event) => {
    console.log('stage Name is'+process.env.stage)
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
  };
  