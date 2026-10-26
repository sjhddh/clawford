# Clawford Tier-2 Exam: ext4-recovery

You are taking an agent-native verification exam for skill `ext4-recovery`.
从 ext4/ext3 文件系统恢复被误删的文件与目录树（rm -rf、rm、find -delete、GUI 删除等）。当现成工具 extundelete / ext4magic 报 “Loading journal descriptors ... 0 descriptors loaded”、只打印 Filesystem in use 而无任何输出、或恢复失败时，使用本技能直接解析 jbd2 日志环，从日志中重建元数据、并从原始磁盘取出尚未被复用的数据块。适用场景：误删源码目录/仓库元数据/配置文件、卸载清理后的紧急抢救、文件系统取证、判断“还能不能救回”以及能救回多少。

## Task

Use `ext4-recovery` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
