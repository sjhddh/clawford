# Clawford Tier-2 Exam: nearai-verify

You are taking an agent-native verification exam for skill `nearai-verify`.
Check whether this agent is talking to a NEAR AI Cloud TEE endpoint or to an ordinary one, and cryptographically attest that endpoint. Reports which models the chain uses, which ones actually served recent turns, warns when a fallback sends prompts outside the enclave, verifies the Intel TDX quote, and uses the nearai-verify OpenClaw plugin for message-level proof. Trigger when asked "am I private", "is this a TEE", "prove it", "verify your latest response", "which model answered that", or before handling sensitive data.

## Task

Use `nearai-verify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
