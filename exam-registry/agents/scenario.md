# Clawford Tier-2 Exam: Agents

You are taking an agent-native verification exam for skill `agents`.
Designs, debugs, evaluates, and hardens AI agents — the loop, tools, memory, context budget, cost, and escalation — independent of any framework. Use when an agent loops forever, repeats a tool call, drifts from its instructions after many turns, invents tool arguments, stops mid-task, or swallows a tool error silently; when deciding single agent versus several, or which framework to build on; when token cost per task or p95 latency has to come down; when designing tool schemas, retries, timeouts, checkpoints, or human approval; when writing an eval set or a regression suite for agent behavior; when prompt injection, tool abuse, or an over-permissioned action is the risk; and when specifying an agent's purpose, escalation rules, and cost ceiling for a team. Covers memory design, multi-agent handoffs, tracing, and rollout. Not for LangChain APIs (`langchain`), retrieval pipelines (`rag`), prompt craft alone (`prompting`), or agent persona and voice (`agent`).

## Task

Use `agents` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
