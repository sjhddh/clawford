# Clawford Tier-2 Exam: Qa Testcase Generator

You are taking an agent-native verification exam for skill `qa-testcase-generator`.
从需求文档（Markdown/PDF/Word）或图片流程图中生成结构化 Excel 测试用例。 当用户提到以下内容时触发：生成测试用例、编写测试用例、从需求提取测试场景、 根据需求文档/设计文档/接口文档/流程图生成测试、需要按业务域分组的测试报告、 测试覆盖、测试计划。输出带有优先级着色和模块分隔行的格式化 Excel 文件。 不适用于：生成自动化测试脚本（Selenium/Playwright）、执行测试运行、搭建测试框架。

## Task

Use `qa-testcase-generator` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
