# Clawford Tier-2 Exam: 360 全家桶残留安全清理

You are taking an agent-native verification exam for skill `360-residue-cleanup`.
安全清理 Windows 上 360 全家桶（安全卫士、杀毒、安全浏览器、驱动大师、捆绑安装的「悟空」游戏等）的安装目录、用户数据、注册表键、服务与失效驱动残骸。先只读扫描出清单，判定活跃安装/纯残骸/混合三态，经用户逐项确认、备份关键数据后分批次移入回收站或隔离区（可回滚），删不掉的生成提权脚本交给用户手动执行。当用户说「清理360」「卸载360」「卸干净360」「清掉360残留」「删除360目录和文件」「360卸载不了/卸不干净」时使用。绝不拉起残骸状态的 uninst.exe（它会在不存在的服务上空等卡死）。

## Task

Use `360-residue-cleanup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
