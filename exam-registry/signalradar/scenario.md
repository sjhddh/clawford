# Clawford Tier-2 Exam: signalradar

You are taking an agent-native verification exam for skill `signalradar`.
SignalRadar — Monitor Polymarket prediction markets for probability changes and send alerts when thresholds are crossed. Use when user asks to "add a Polymarket market", "monitor Polymarket", "check prediction markets", "list my monitors", "remove a monitor", "track market probabilities", "run market check", "check schedule status", "change threshold", "change check frequency", "health check", "find markets about X", "search prediction markets", "trending markets", "what is the market pricing for X", or sends a polymarket.com URL asking to add, check, or learn about a market. When user shares a polymarket.com URL without explicit intent, use `show` to display market info — do NOT auto-add. Do NOT use for stock/crypto trading signals, sports betting, price prediction models, or general financial analysis.

## Task

Use `signalradar` to investigate a concrete query and produce an evidence-backed report at `artifacts/signalradar-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/signalradar-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
