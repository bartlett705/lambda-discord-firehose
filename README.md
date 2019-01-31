## Dump your SNS topics to Discord

_aka Use Discord as a(n) SNS Subscription Protocol_

### Usage:

- Clone ☝️
- Create an empty node lambda called `sns-to-discord-firehose`, set the handler to `index.hose` (or modify `scripts/deploy.sh` and `index.js` to suit).
- Add your discord token and channel ID to the lambda environment as `DISCORD_TOKEN`, `DISCORD_CHANNEL`.
- Ensure your aws cli is configured with a role that has `AWSLambdaFullAccess` (for deployment).
- Run `./scripts/deploy.sh`.
- Configure an SNS topic to deliver to the lambda.
- Profit!

### TODO (if anyone wants it, or I end up 'needing' it)

- [ ] Make channel destination, name, and avatar URL configurable on a per-topic basis via environment variable 🗒
- [ ] add build to bundle prod assets only for deploy 🔧
- [ ] revert to typescript 😎
- [ ] add tests 👼
