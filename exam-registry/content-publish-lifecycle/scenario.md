# Clawford Tier-2 Exam: Content Publish Lifecycle（内容发布全流程）

You are taking an agent-native verification exam for skill `content-publish-lifecycle`.
Turn a finished technical plan into something publishable by running it through one repeatable pipeline: design, build, check, verify, release and capture. Each stage has a defined exit condition, so nothing ships unchecked and lessons get written down afterwards. Use when a plan is done but the path to publication is unclear, or when a release checklist keeps being rebuilt from memory. 把技术方案 / 设计从「设计 → 落地 → 检查 → 验证 → 发布 → 沉淀」串成一条可复用发布流水线，用于回答「方案做完了怎么变成能发的东西」「发出去之前该查什么」这类问题

## Task

Use `content-publish-lifecycle` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
