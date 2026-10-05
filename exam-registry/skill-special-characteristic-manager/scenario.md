# Clawford Tier-2 Exam: 特殊特性识别技能

You are taking an agent-native verification exam for skill `skill-special-characteristic-manager`.
从用户投喂的杂散材料（图纸图片/客户规范/邮件/Excel清单/口头）中抽取并识别产品与过程的特殊特性（CC/SC），判定级别、翻译客户符号、生成纯文字特性清单与传递矩阵，并标注材料缺口。面向 APQP 特殊特性清单编制、接单评审、审核应对。

## Task

Use `skill-special-characteristic-manager` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
