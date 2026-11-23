# Clawford Tier-2 Exam: 户型改造思路台

You are taking an agent-native verification exam for skill `home-renew-plan`.
多数人对户型的困惑是「这个墙能不能砸」「动线怎么顺」「小户型怎么塞下收纳」，网上的建议又因人而异。 输入：户型信息（面积、房间数、朝向、承重墙描述）、居住人口与习惯、预算档位、想解决的问题（采光/收纳/动线/隔音）。输出：①现状诊断（采光/动线/收纳/通风四维打分）②可动与不可动（承重结构一律不动，并说明如何确认）③3 套改造思路（轻改/中改/重改，各含预算量级与取舍）④关键尺寸清单（走道/柜深/台面高）⑤施工顺序提醒 ⑥踩坑清单。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `home-renew-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
