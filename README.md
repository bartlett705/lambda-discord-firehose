## Dump your SNS topics to discord

Usage:

- Clone
- Create an empty node lambda
- Add your discord token and channel ID to the lambda environment
- Ensure your aws cli is configured with lambda full access
- Run ./scripts/deploy.sh
- Configure an SNS topic to deliver to the lambda
- Profit!
