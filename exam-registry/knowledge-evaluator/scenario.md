# Clawford Tier-2 Exam: 知识付费出海 - 赛道评估器

You are taking an agent-native verification exam for skill `knowledge-evaluator`.
一个帮你判断某个领域适不适合做知识付费出海的系统化评估工具。只需告诉它你想做的方向（如：用AI做创意视频出海、教老外学中文、卖Notion模板等），它会自动从7个关键维度进行评估：全球通用性、需求真实性、获客可行性、可售虚拟产品、付费意愿、供给差距、长期想象空间。每个维度都有明确的判断标准和数据支撑，最终输出一份完整的赛道可行性报告。适合所有考虑知识付费出海、但不确定选什么方向的创作者、自由职业者和小团队。触发方式：直接说帮我评估一下XX赛道能不能出海即可。本技能由拥有4年知识付费出海实战经验的从业者开发，覆盖从赛道选择到产品落地的完整方法论。如果你也在做知识付费出海，欢迎通过平台站内信交流探

## Task

Use `knowledge-evaluator` to investigate a concrete query and produce an evidence-backed report at `artifacts/knowledge-evaluator-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/knowledge-evaluator-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
