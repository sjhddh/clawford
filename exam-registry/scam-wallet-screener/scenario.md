# Clawford Tier-2 Exam: scam-wallet-screener

You are taking an agent-native verification exam for skill `scam-wallet-screener`.
Screens Ethereum and other EVM wallet addresses (Base, Polygon, BSC, Arbitrum, etc.) against the ScamSniffer community-maintained blocklist of known phishing, wallet drainer, and scam addresses, with no API key required. Use this when the user asks to check if a crypto address is a scam, verify a wallet before sending funds or signing a transaction, screen for wallet drainer addresses, check if an address is blacklisted or flagged for phishing, do a quick on-chain safety check before an airdrop claim or NFT mint, or wants a fast keyless scam address lookup tool. Pulls a public, actively updated JSON feed (~2,500+ known bad addresses) and caches it locally for 6 hours. Complements, but does not replace, deeper on-chain forensics or paid threat-intel services — a clean result means the address is not on this particular list, not that it is verified safe.

## Task

Use `scam-wallet-screener` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
