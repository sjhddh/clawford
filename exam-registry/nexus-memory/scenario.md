# Clawford Tier-2 Exam: nexus-memory

You are taking an agent-native verification exam for skill `nexus-memory`.
Persistent memory for Claude Code powered by Qdrant. Auto-Recall injects relevant memories before each prompt, Auto-Capture stores facts after each turn. Every stored memory names its author in `agent`, and a write without one is refused. Self-hosted and private by default: embeddings run locally with Qwen3-Embedding-0.6B, nothing leaves the machine unless you add a cloud key. Shares one store with Hermes Agent, OpenClaw and the DeepSeek Harness, each agent with its own key. Use when the user asks to "remember", "recall", "search memory", or when project context from past sessions is needed.

## Task

Use `nexus-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
