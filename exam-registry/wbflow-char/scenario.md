# Clawford Tier-2 Exam: WBFlow·第5环 定妆图(一致性闸门)

You are taking an agent-native verification exam for skill `wbflow-char`.
流水线第5环——读取 01_story/story.json 的角色设定，为每个角色生成"定妆参考图"（正面全身、中性背景、锁定配色与 identity_lock 强符号），并回写 ref_image 路径到 story.json。这是解决跨镜头角色一致性的关键一环。（WBFlow 8 环流水线套件之一，须与 wbflow-pipeline 总控及本流水线其余环节 skill 配套安装才能运行。）

## Task

Use `wbflow-char` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
