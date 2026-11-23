# Clawford Tier-2 Exam: snapback

You are taking an agent-native verification exam for skill `snapback-selfheal`.
Diagnose why an AI-agent run failed and get a structured fix — and catch failures live, mid-run, before they burn your budget. Use this skill WHENEVER an agent run loops, stalls, hits a step/token/context limit, returns the wrong output, or fails and you want to know WHY and HOW to fix it. Also use it DURING a run: detect_loop and budget_guard catch a runaway before the step limit; a live session streams your steps and warns you in real time. Triggers: "why did my agent fail", "it keeps looping", "diagnose this run", "the agent repeated the same tool call", "hit the step limit", "running out of context", "burning tokens", "wrong output", "detect a loop", "watch my run", "check my agent before running". Connects over MCP; most tools are free (discovery, docs, loop + budget checks, live sessions, and instant infrastructure-error diagnosis across 46 families), diagnosis is metered (token or pay-per-call via x402 on Solana or EVM — no account needed).

## Task

Use `snapback-selfheal` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
