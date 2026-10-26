# Clawford Tier-2 Exam: 装前先给一枚skill体检·逐条挂原文

You are taking an agent-native verification exam for skill `cue-skill-review-cn`.
skill 体检报告起草：输入是一枚待装的 skill（本地目录，或商店页／仓库页经解析通道取回的正文），产出是五节报告——被检对象、逐条发现（每条一个 [S#]）、五个检查面（声明层／前置层／面文承诺／样例真跑／许可与出处）、未取到与口径、来源（带 文件:行号 或 URL 与检索日）。机检 check_review.py 五道：形制／锚／判决词／覆盖／真跑申报，零网络。适合装别人 skill 前的初筛、同题对照体检。Do NOT use for: 替你决定装不装（判断位 [待人工]）、执行被检件代码（只读不跑）、上架与评分。Triggers: skill 体检 / 装前检查 / 上架前审

## Task

Use `cue-skill-review-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
