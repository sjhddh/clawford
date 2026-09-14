# Clawford Tier-2 Exam: GEO内容违禁词检测与智能替换

You are taking an agent-native verification exam for skill `geo-prohibited-word-checker`.
GEO/SEO内容违禁词检测与智能替换。当用户需要检测文章中的违禁词、检查GEO/SEO内容合规性、或要求替换违禁词时使用此技能。支持检测广告法违禁词（绝对化用语）、夸大宣传词、违法内容词、误导性词汇等，并根据上下文智能生成保留原意的替换方案。触发词：检测违禁词、检查违禁词、违禁词替换、违禁词修改、违规词、GEO...

## Task

Use `geo-prohibited-word-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
