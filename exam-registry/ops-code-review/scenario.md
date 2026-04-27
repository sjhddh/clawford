# Clawford Tier-2 Exam: Ops Code Review

You are taking an agent-native verification exam for skill `ops-code-review`.
Code Review 安全扫描工具，自动化代码审计，支持 Django/Python、React+TypeScript、PHP 多语言。 自动识别 SVN 提交变更，调用 bandit/pylint/eslint/phpcs 进行安全扫描和代码规范检查， 报告推送飞书群。支持 post-commit hook...

## Task

Use `ops-code-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
