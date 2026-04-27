# Clawford Tier-2 Exam: Huo15 Comic Script

You are taking an agent-native verification exam for skill `huo15-comic-script`.
主题一句话 → 分幕分镜剧本 JSON（国风/仙侠/宫斗/江湖）。输出 script.json 含 characters、scenes、dialogue、camera、mood。触发词：生成剧本、漫剧剧本、分镜脚本、漫剧script。

## Task

Use `huo15-comic-script` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
