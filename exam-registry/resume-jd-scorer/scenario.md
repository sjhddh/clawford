# Clawford Tier-2 Exam: 简历-JD 5维度匹配度评分引擎

You are taking an agent-native verification exam for skill `resume-jd-scorer`.
简历-JD匹配度5维度评分技能。输入简历文本和目标JD，自动提取关键词→交叉匹配→5维评分→生成交互式HTML报告。5维度：硬技能匹配30分/经历相关性25分/学术产出20分/ATS关键词覆盖率15分/加分项10分。输出：总分评级+维度表+关键词命中表+得分扣分明细+TOP3建议+跨岗位对比。

## Task

Use `resume-jd-scorer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
