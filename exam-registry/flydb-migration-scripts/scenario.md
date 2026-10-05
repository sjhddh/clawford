# Clawford Tier-2 Exam: flydb-migration-scripts

You are taking an agent-native verification exam for skill `flydb-migration-scripts`.
创建、修改和组织 Flydb 的 V/R/U 迁移 SQL，处理命名、版本族与目录版本、路径过滤、占位符和历史 checksum。用户要写迁移脚本、重组 locations 或修正脚本相关 FLYDB-2xxx 错误时使用；数据库执行与恢复操作交给 flydb-cli-release。

## Task

Use `flydb-migration-scripts` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
