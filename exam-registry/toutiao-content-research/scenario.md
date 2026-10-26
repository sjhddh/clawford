# Clawford Tier-2 Exam: 今日头条内容研究

You are taking an agent-native verification exam for skill `toutiao-content-research`.
当用户需要做今日头条内容研究、文章选题、热点角度整理或同主题内容对比时使用。输入主题或内容链接，基于相关作品和详情输出样本概览、标题模式与可继续验证的内容方向。来自 SocialDataX 社媒数据助手。

## Task

Use `toutiao-content-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/toutiao-content-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/toutiao-content-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
