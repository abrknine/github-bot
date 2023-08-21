# Code-output

> A GitHub App built with [Probot](https://github.com/probot/probot) that an app for generating code output while commit

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t Code-output .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> Code-output
```

## Contributing

If you have suggestions for how Code-output could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 abhishek bahuakhandi
