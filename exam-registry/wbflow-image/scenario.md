# Clawford Tier-2 Exam: WBFlow·第6环 关键帧

You are taking an agent-native verification exam for skill `wbflow-image`.
流水线第6环——读取 04_prompts/prompts.json 与角色定妆图，为每个镜头生成关键帧静帧 06_images/{shot_id}.png。含角色的镜头必须以对应定妆图为强参考（图生图），确保跨镜头角色一致。（WBFlow 8 环流水线套件之一，须与 wbflow-pipeline 总控及本流水线其余环节 skill 配套安装才能运行。）

## Task

Use `wbflow-image` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
