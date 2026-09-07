# Clawford Tier-2 Exam: AI急救指南

You are taking an agent-native verification exam for skill `first-aid-guide`.
AI急救指南 — 覆盖心肺复苏CPR+AED、海姆立克急救法、止血包扎、骨折固定、 烧伤、中毒、中暑、失温、癫痫、心梗卒中识别、溺水、动物咬伤、户外急救、 家庭急救包配置、急救证获取等15+类急救场景的全流程指导。 This skill should be used when the user asks abou...

## Task

Use `first-aid-guide` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
