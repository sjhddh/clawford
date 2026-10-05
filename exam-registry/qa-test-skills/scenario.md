# Clawford Tier-2 Exam: qa-test-skills

You are taking an agent-native verification exam for skill `qa-test-skills`.
从需求文档自动生成结构化测试用例，覆盖功能测试、边界分析、组合测试和回归测试全流程。自动串联48个专家级子技能，按12步工作流编排执行。适用于：上传需求文档（PRD/Word/PDF/URL）需要完整测试用例时、不知道如何设计测试场景或担心遗漏边界条件时、需要AI评审测试输出并补充测试盲区时。每个步骤都有独立技能支撑，输出格式统一、需求可追溯、覆盖率可量化。 触发场景：生成测试用例、帮我测试、设计测试、上传需求、开始测试、获取安装指引时。 Use when the user asks about: generating structured test cases from a PRD, Word, PDF, or URL through an orchestrated workflow covering functional, boundary, combination, and regression testing.

## Task

Use `qa-test-skills` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
