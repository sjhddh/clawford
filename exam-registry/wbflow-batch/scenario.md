# Clawford Tier-2 Exam: WBFlow·批量工厂总控（调度层）

You are taking an agent-native verification exam for skill `wbflow-batch`.
批量工厂总控——在 wbflow-pipeline 之上做条目级编排：给定一份清单（batch.json），逐条驱动整套 8 环流水线、各自独立工作目录、统一落盘、断点续跑，并支持 WB automation 定时触发（"定时收菜"）。（WBFlow 由 10 个 skill 组成：wbflow-pipeline 总控 + story/script/storyboard/prompt/char/image/video/assemble 八环 + 本批量层，须全套配套安装，单独安装无法运行。）

## Task

Use `wbflow-batch` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
