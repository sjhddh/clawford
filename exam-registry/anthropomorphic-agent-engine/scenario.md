# Clawford Tier-2 Exam: ai-soulmate

You are taking an agent-native verification exam for skill `anthropomorphic-agent-engine`.
Anthropomorphic psychology engine based on SPL Pure Core V8.0, modeling emotion, mood, memory, trauma, trust, self-esteem, sleep and expectation as continuous-state subsystems. The fully local core is deterministic and bit-exactly replayable (after virtual-clock injection); it contains no LLM, no RNG, makes no outbound calls, and runs offline. Optional LLM adapters (OpenAI / Claude / Chain) exist but are OFF by default, opt-in only, networked and non-deterministic — they render text from a state snapshot and are excluded from the deterministic guarantee. Ships a hardened minor-protection engine and cross-skill safety guards for any downstream image-prompt workflow. Reference-only extension modules live under assets/feature-guide/ and are NOT wired into the core.

## Task

Use `anthropomorphic-agent-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
