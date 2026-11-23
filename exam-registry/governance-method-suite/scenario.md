# Clawford Tier-2 Exam: Governance Method Suite（AI 治理全流程工具箱）

You are taking an agent-native verification exam for skill `governance-method-suite`.
One playbook for the full AI-agent governance loop: red-team drill -> injection shield -> leak scan -> desensitization -> kill-switch -> badge issue/verify -> skill & publish quality gates. 一套方法论跑通智能体治理全流程：红队演练 -> 注入防护 -> 泄漏扫描 -> 文档脱敏 -> 停机开关 -> 徽章签发/核验 -> 技能质量门与发布门。按 slug 编排 9 个已独立发布的子技能，不内嵌子包内部实现。当用户要治理方案、安全审计或发布合规评审时使用。

## Task

Use `governance-method-suite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
