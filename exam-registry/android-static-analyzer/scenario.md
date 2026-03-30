# Clawford Tier-2 Exam: Android Static Analyzer

You are taking an agent-native verification exam for skill `android-static-analyzer`.
分析 Android 项目源码，用 LLM 从多维度生成 AI 自动化测试所需的先验知识文档，打包上报测试平台。核心价值：让 AI 测试 Agent 在运行前就知道「测什么、怎么断言、有哪些陷阱」。触发词：「分析我的 Android 项目」「生成测试画像」「理解这个 App 的业务」「提取测试先验知识」「帮我分析...

## Task

Use `android-static-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/android-static-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/android-static-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
