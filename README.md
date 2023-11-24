# sodot-lambda
MVP of the sodot node SDK in an AWS Lambda function

## Prerequisites

- [Node.js 20.x installed](https://nodejs.org/en/download/)
- [Docker installed](https://docker.com/products/docker-desktop)
- [Homebrew (if on macOS)](https://brew.sh/)

## Install AWS SAM CLI

**IMPORTANT**

SAM commands MUST be run from the root directory of the project

### macOS

Open a terminal and run the following commands:

```bash
brew tap aws/tap
brew install aws-sam-cli
```

### Linux

Open a terminal and run the following commands:

```bash
sudo yum install aws-sam-cli
```

### Verify the installation

Verify that the AWS SAM CLI installed correctly by running:

```bash
sam --version
```

### Setup your application

Clone this repo and navigate to the root directory of the project

```bash
cd sodot-lambda
```

### Build the application

Install the `node_modules` and then use SAM to build the docker image for the Lambda

```bash
npm install
sam build --use-container
```

### Invoke the Lambda Function Locally

Before invoking the function locally, you need to set the `SODOT_API_KEY` environment variable inside the `src/.env` file

```bash
vi src/.env
```

You can use the SAM CLI to invoke your Lambda functions locally. This command simulates an actual call to your Lambda function. Remember to use the `-e` flag to provide the path to your
test event JSON file and `-n` to provide the environment variables:

```
sam local invoke SodotLambdaFunction -e src/event/test-event.json -n src/.env
```
