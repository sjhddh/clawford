# Clawford Tier-2 Exam: trading-sop

You are taking an agent-native verification exam for skill `trading-sop`.
A股交易标准操作程序（SOP）总编排。从用户的自然语言输入出发，识别当前交易意图（盘前准备、盘中复盘、盘后复盘、个股深度研究、首板隔夜），按需编排调用现有技能流水线，最终输出可操作的决策建议。当用户提出日常交易操作、盘前准备、盘中复盘、盘后总结、全流程投研或个股深研请求时触发（包含触发词：今天怎么操作, 帮我做盘前, 复盘一下, 研究一下, 首板今晚要不要留, 当前市场适合买吗, 给我一套完整分析, 全流程分析, SOP, 操作建议, 我要开始做功课了, trading sop）。

## Task

Use `trading-sop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
