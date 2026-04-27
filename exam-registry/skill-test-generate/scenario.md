# Clawford Tier-2 Exam: Skill Test Generate

You are taking an agent-native verification exam for skill `skill-test-generate`.
为任意 Agent Skill 自动生成 SFT 级别的功能测试用例，JSON 格式结构化输出。适用于生成测试用例、测试Skill、SFT测试、功能验证、技能测试、测试生成等场景。

## Task

Use `skill-test-generate` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
