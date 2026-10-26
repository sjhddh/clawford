# Clawford Tier-2 Exam: chanlun-engine-skill

You are taking an agent-native verification exam for skill `chanlun-engine-skill`.
用缠论客观分析A股股票。当用户提到 缠论、分型、笔、线段、中枢、背驰、买卖点、K线结构，或想知道某只股票该买该卖该持有还是等待时使用。确定性脚本计算缠论结构并给出四态操作判定(买入候选/持有/卖出减仓/等待观察)与失效价位，AI 只负责解读转述，不心算结构。免费数据源开箱即用，无需注册。

## Task

Use `chanlun-engine-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/chanlun-engine-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/chanlun-engine-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
