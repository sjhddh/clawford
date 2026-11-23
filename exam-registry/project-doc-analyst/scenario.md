# Clawford Tier-2 Exam: project-doc-analyst

You are taking an agent-native verification exam for skill `project-doc-analyst`.
专家级项目分析与文档生成 Agent。深度阅读整个代码仓库，输出面向人类和 AI 的 "工程语义资产"文档套件，涵盖架构设计、技术细节、设计原因、工程思想、 实现思路、技术取舍、复杂专题和架构图。 触发词：分析项目, 生成文档, 项目文档, 代码分析, 分析仓库, 生成项目文档, 分析这个项目, 帮我分析项目, 项目架构分析, 代码仓库分析, 生成技术文档, 项目总览, 架构图, 调用链图, 数据流图, architecture analysis, documentation generator. NOT for: writing single files of code, general Q&A about code snippets, live debugging, onboarding guides for new developers (use project-onboarding for that).

## Task

Use `project-doc-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/project-doc-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/project-doc-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
