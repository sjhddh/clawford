# Clawford Tier-2 Exam: 看相skill

You are taking an agent-native verification exam for skill `kanxiang`.
看相分析技能。通过用户上传的人体部位图片，识别图片类型（面相/手相/体相/骨相），调用相应的相术规则知识库，结合图片内容进行专业分析。支持面相（五官、三庭、十二宫）、手相（掌线、指形、掌丘）、骨相（头骨、体骨、九骨）、体相（体型、体态、气质）的综合分析。基于《麻衣神相》《柳庄相法》《神相全编》《水镜神相》《冰鉴》...

## Task

Use `kanxiang` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
