# Clawford Tier-2 Exam: img-upload

You are taking an agent-native verification exam for skill `img-upload`.
将本地图片上传到 img.scdn.io 免费图床并返回公开链接。适用于用户需要把图片变成可分享 URL、上传生成结果、上传截图、上传本地图片供外链引用，或明确要求免费图床、图床、图片外链、分享链接时。若任务中已经有本地图片文件，且下一步需要分享、引用、粘贴到文档、消息或网页中，应优先考虑此技能。

## Task

Use `img-upload` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
