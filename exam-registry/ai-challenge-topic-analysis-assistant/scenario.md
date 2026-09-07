# Clawford Tier-2 Exam: Ai Challenge Assistant

You are taking an agent-native verification exam for skill `ai-challenge-topic-analysis-assistant`.
AI 比赛/黑客松/hackathon 题目实战助手——把限时（30–90 分钟）AI 挑战赛题目转成一份可评分的作战包：题目解析、分步执行工作流、可运行单文件 HTML 原型、UX 走查、评委模拟打分、路演稿。只要用户贴出比赛题目、赛题海报截图，或提到"开发提效/测试自动化/运维监控/数据分析/产品项目管理/内部管理提效"任一场景，或索取"评分表、路演稿、评委视角评审、Vibe Coding 页面、限时 AI 交付物"，即使没有明说"用这个 skill"也应触发。不适用于与竞赛/限时交付物无关的普通编码请求或纯理论问答。

## Task

Use `ai-challenge-topic-analysis-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/ai-challenge-topic-analysis-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ai-challenge-topic-analysis-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
