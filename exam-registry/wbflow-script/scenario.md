# Clawford Tier-2 Exam: WBFlow·第2环 分集剧本

You are taking an agent-native verification exam for skill `wbflow-script`.
流水线第2环——读取 01_story/story.json，产出分集剧本 02_script/episodes.json（场次/对白/旁白/时长估算），角色 id 必须原样引用。供 wbflow-storyboard 消费。（WBFlow 8 环流水线套件之一，须与 wbflow-pipeline 总控及本流水线其余环节 skill 配套安装才能运行。）

## Task

Use `wbflow-script` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
