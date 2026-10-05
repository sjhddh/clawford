# Clawford Tier-2 Exam: amazon-shopper

You are taking an agent-native verification exam for skill `tinker-amazon-shopper`.
Amazon shopping that ends in a decision, not a page of links. It sweeps a dozen query phrasings instead of trusting one keyword, decodes the spec markings a listing hides (memory-card A2/V30 classes, active-ingredient concentration), and ranks on the metric that actually decides the buy — €/kg of active, €/GB, €/kg of protein — so the cheapest sticker price stops winning by default. Availability is a hard gate: a listing that still renders is not a listing you can buy. It reads amazon.es ANONYMOUSLY — there is no login, no cookie capture, no browser tab to share and no stored session, because 1.2.1 removed that code from the package rather than leaving it switched off. It reads no credential of your own; the only secrets it touches are API keys you set yourself for two optional paid paths (Apify, the Amazon Creators API), and with neither set it makes no third-party call. It searches amazon.es and nothing else — the classifieds scrapers earlier versions shipped behind a flag are gone. There is no write path to Amazon at all: it cannot add to a basket, place an order or change a setting. Built for the TinkerClaw fork — github.com/globalcaos/tinkerclaw. Use when the user asks "find me X on Amazon and tell me the best deal", "best price per kg/GB of X", or any iterative shopping conversation where the agent should drive the narrowing. NOT for: raw extraction without analysis, live price-tracking crons, delivery-date promises, or anything needing your account. See Permissions, Data Flow & Consent.

## Task

Use `tinker-amazon-shopper` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
