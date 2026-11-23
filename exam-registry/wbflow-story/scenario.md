# Clawford Tier-2 Exam: WBFlow·第1环 企划人设

You are taking an agent-native verification exam for skill `wbflow-story`.
流水线第1环——把一句话主题变成结构化故事大纲与人物设定，输出 01_story/story.json（含 characters[].id 全局唯一、世界观、集数规划）。供 wbflow-script 消费。（WBFlow 8 环流水线套件之一，须与 wbflow-pipeline 总控及本流水线其余环节 skill 配套安装才能运行。）

## Task

Use `wbflow-story` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
