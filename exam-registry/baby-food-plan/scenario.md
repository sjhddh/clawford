# Clawford Tier-2 Exam: 辅食与作息计划台

You are taking an agent-native verification exam for skill `baby-food-plan`.
辅食添加的困惑集中在：什么时候加什么、过敏怎么办、一天几顿、和奶怎么排。 输入：宝宝月龄与体重、当前喂养方式（母乳/配方/混合）、已引入食物与过敏史、作息现状、家庭饮食条件。输出：①分阶段辅食计划（6/8/10/12 月龄的质地与品类顺序）②一周食谱示例（含做法要点）③新食物引入规则（单一引入、观察 3 天、记录反应）④过敏应对流程（轻度反应 vs 需立即就医的信号）⑤作息表（喂养-小睡-活动时段）⑥安全要点（呛噎风险食物与处理）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `baby-food-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
