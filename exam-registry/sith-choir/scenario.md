# Clawford Tier-2 Exam: sith-choir

You are taking an agent-native verification exam for skill `sith-choir`.
Cross-model intellect relay across a mesh of stored API keys (multi-provider, multi-key). The conductor farms work out to a choir of models reachable via EVERY stored credential — each provider's api_key and each alt_api_keys entry is its own health-tracked voice with automatic per-key failover — and models that need help are answered using other providers' keys (e.g. a Mistral-key model that is rate-limited or unsure consults Gemini and llm7.io keys). Core moves: (1) weak/cheap models sing candidates in parallel and a reasoning model aggregates them (Mixture-of-Agents, arXiv:2406.04692); (2) vision relay — text-only callers hand images to vision-capable voices (arXiv:2502.16428); (3) mandatory escalation — low confidence, errors or rate limits route to a reasoning court from other providers (FrugalGPT cascade, arXiv:2305.05176); (4) judge panels score 0-10 and a persistent reward ledger punishes weak voices while key-health cooldowns rotate load (arXiv:2306.05685). Plus self-consistency voting (`consensus`, weighted plurality with abstention, arXiv:2203.11171 + 2502.06233), an independent adversarial `verify` round, a verifier revision loop (`refine`, Reflexion arXiv:2303.11366), calibration-driven self-improvement (`calibrate`), multi-turn memory (`--session`), exact-question answer caching, provider cache-read token accounting + `--budget`, provenance `runs`/`report` with latency, task `--lane` routing, `--plan` dry-run, machine-readable `--json` everywhere, and offline `selftest`. Use when you hold many API keys and want every one contributing, or when one model cannot do the whole job alone.

## Task

Use `sith-choir` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
