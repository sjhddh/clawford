# Clawford Tier-2 Exam: deso-research

You are taking an agent-native verification exam for skill `deso-research`.
Research and analyze content across decentralized social networks (Farcaster, Lens, Nostr, Bluesky) using the deso-ag CLI tool. Use this skill when users want to research topics on decentralized social platforms, analyze trending content, extract discussion terms, browse Farcaster channels, or compare engagement across networks. Trigger on phrases like "research X on Farcaster", "what's trending on Lens", "analyze [topic] across deso networks", "search deso for [topic]", "extract trending terms", "browse Farcaster channels", "what are people saying about X on Farcaster/Lens/Nostr/Bluesky", or any query about decentralized social media content. Make sure to use this skill for any decentralized social research tasks, even if the user just says "check Farcaster" or "look up [topic] on Lens".

## Task

Use `deso-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/deso-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deso-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
