# Clawford Tier-2 Exam: WBFlow·第4环 提示词

You are taking an agent-native verification exam for skill `wbflow-prompt`.
流水线第4环——读取 03_storyboard/storyboard.json 与 01_story/story.json，为每镜生成可直接粘贴的图像/视频提示词 04_prompts/prompts.json（含 appearance_lock 注入与 forbidden 继承）。（WBFlow 8 环流水线套件之一，须与 wbflow-pipeline 总控及本流水线其余环节 skill 配套安装才能运行。）

## Task

Use `wbflow-prompt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
