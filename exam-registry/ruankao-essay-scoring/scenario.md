# Clawford Tier-2 Exam: Ruankao Essay Scoring | 软考论文评分

You are taking an agent-native verification exam for skill `ruankao-essay-scoring`.
软考高级论文评分与诊断，支持全部 5 个高级资格：系统架构设计师（默认）、信息系统项目管理师、系统分析师、网络规划设计师、系统规划与管理师。当用户提到"帮我评分""给我的论文打分""论文评分""论文自查""论文诊断""看看我论文能得多少分"，或提交了论文内容希望评估时触发，先确认资格类型再执行对应评分标准。不适用于论文写作指导（那是 ruankao-essay-writing 的职责）、纯知识问答或非软考论文场景。

## Task

Use `ruankao-essay-scoring` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
