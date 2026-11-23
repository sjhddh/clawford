# Clawford Tier-2 Exam: AI Code Verification Guard

You are taking an agent-native verification exam for skill `ai-code-verification-guard`.
Deterministic code-verification guard for AI coding agents. Runs syntax, type, lint and test checks before and after code changes, and decides PASS / FAIL / REGRESSION / UNVERIFIED purely by script exit codes. The agent may only quote the verdict, never overrule it. Use when the user asks to modify code, implement features, fix bugs, or verify change reliability (trigger phrases - verify this, run the tests, regression check, confirm it works, 验证一下, 跑测试, 回归检查, 确认没问题). Not for general code review or security audits.

## Task

Use `ai-code-verification-guard` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
