# Clawford Tier-2 Exam: Live-stream Script Planner

You are taking an agent-native verification exam for skill `live-script-planner`.
根据用户输入（产品、目标、直播类型等）生成专业的直播间口播、互动和逼单脚本。支持参数化调用，可指定带货类/种草类/品牌宣讲类等不同风格。

## Task

Use `live-script-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
