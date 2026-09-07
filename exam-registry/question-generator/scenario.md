# Clawford Tier-2 Exam: AI Question Generator

You are taking an agent-native verification exam for skill `question-generator`.
AI智能出题系统。根据知识点、学习材料或主题，生成10种题型（单选/多选/判断/填空/简答/论述/计算/应用/匹配/案例分析）的多层次试题，基于Bloom分类法标注认知层次，附答案与详细解析，输出交互式HTML试卷。覆盖K12至高等教育及职业培训全场景。触发词：出题, 生成题目, 生成试题, 出几道题, 组卷,...

## Task

Use `question-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
