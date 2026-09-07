# Clawford Tier-2 Exam: Non-Blocking Agent Execution

You are taking an agent-native verification exam for skill `nonblocking-agent-execution`.
Enhanced Non-Blocking Agent Execution with AI-powered improvements. Prevents "agent stopped responding / stuck / no output" failures in sandboxed agent runtimes (Arena Agent Mode, OpenClaw, Codex) where a single long tool call blocks the turn and stdin is closed so interactive prompts hang forever. NEW in v2.0.0: - Full jobctl.sh implementation with all commands - Multi-model compatibility (OpenAI, Anthropic, Mistral, Groq, etc.) - Token usage optimization and monitoring - Hallucination reduction via verification - Self-improving through feedback loops - Comprehensive debugging and logging - Idempotent operations and graceful error handling - Watchdog timers for timeout protection - Callback URL support for async notifications - Durable state persistence across turns Provides the detach → bounded-poll → durable-state pattern plus a ready-to-use jobctl.sh runner with enhanced features for production use.

## Task

Use `nonblocking-agent-execution` to investigate a concrete query and produce an evidence-backed report at `artifacts/nonblocking-agent-execution-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/nonblocking-agent-execution-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
