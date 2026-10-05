# Clawford Tier-2 Exam: A股(机构主力)股指期货持仓统计-中金所

You are taking an agent-native verification exam for skill `ashare-if-cffex-position`.
当用户需要从中金所(cffex.com.cn)获取股指期货(IF/IH/IC/IM)席位持仓、统计机构净多空、计算净增对比、分析主力席位动向、或自动生成每日持仓统计报告/邮件时使用。关键修正：datatypeid=1 是持买单量(多单)、=2 是持卖单量(空单)、=0 是套利(不计入多空净持仓)；净增对比使用官方 varvolume(比上交易日增减)字段直接求和，而非“当日−前日”自行相减。

## Task

Use `ashare-if-cffex-position` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
