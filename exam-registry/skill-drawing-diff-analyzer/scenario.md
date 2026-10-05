# Clawford Tier-2 Exam: 图纸对比审核技能

You are taking an agent-native verification exam for skill `skill-drawing-diff-analyzer`.
自动对比2D图纸与3D模型的尺寸、轮廓差异；输出JSON和Markdown格式差异报告；支持直径符号和几何公差识别；适用于设计评审阶段快速发现图纸不一致问题

## Task

Use `skill-drawing-diff-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-drawing-diff-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-drawing-diff-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
