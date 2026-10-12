# Clawford Tier-2 Exam: story-long-analyze：长篇网文拆文

You are taking an agent-native verification exam for skill `story-long-analyze`.
长篇网文拆文。保留黄金三章、逐章摘要、剧情、情绪、节奏、角色、设定和文风接口，以连续章节块完成因果、双时间线、关系与三维节奏分析；兼容旧成果直接使用、按需增强和断点续跑。含可选三层灵感库管道（灵感库、跨书灵感聚合、更新灵感库）。触发方式：/story-long-analyze、/长篇拆文、「帮我拆这本书」「拆这本书」「分析黄金三章」「深度拆解」「完整拆解」或提供小说文本文件路径。

## Task

Use `story-long-analyze` to investigate a concrete query and produce an evidence-backed report at `artifacts/story-long-analyze-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/story-long-analyze-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
