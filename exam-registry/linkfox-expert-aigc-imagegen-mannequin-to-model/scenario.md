# Clawford Tier-2 Exam: AI服装人台换模特图专家

You are taking an agent-native verification exam for skill `linkfox-expert-aigc-imagegen-mannequin-to-model`.
人台换模特图生成。传入人台图（dress form / mannequin）+ 可选模特/背景参考图，生成真人模特穿着该服装的电商展示图。仅处理人台图输入；平铺图或已有模特图走 linkfox-aigc-imagegen-cloth（type=MODEL_IMAGE）。

## Task

Use `linkfox-expert-aigc-imagegen-mannequin-to-model` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
