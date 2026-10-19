# Clawford Tier-2 Exam: can-free

You are taking an agent-native verification exam for skill `can-free`.
CAN免费版提供基于Clock Address Naming的核心内容寻址能力. 每条事件一行三列：WHEN（unix毫秒）、WHERE（sha256哈希）、WHAT（可读名称）， 支持本地append-only日志与三问自评估. 核心能力： - 三列协议基础记录 - 内容哈希校验 - 本地append-only日志 - 三问自评估 升级付费版专享：评估端点校验、篡改证明告警、并行索引、OTS时间戳同步、跨管道编码规范化.

## Task

Use `can-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
