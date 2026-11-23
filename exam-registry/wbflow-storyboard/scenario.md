# Clawford Tier-2 Exam: WBFlow·第3环 分镜表

You are taking an agent-native verification exam for skill `wbflow-storyboard`.
流水线第3环——读取 02_script/episodes.json 与 01_story/story.json，产出标准化分镜表 03_storyboard/storyboard.json（镜头号/景别/运镜/画面/时长/角色id）。供 wbflow-prompt 消费。（WBFlow 8 环流水线套件之一，须与 wbflow-pipeline 总控及本流水线其余环节 skill 配套安装才能运行。）

## Task

Use `wbflow-storyboard` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
