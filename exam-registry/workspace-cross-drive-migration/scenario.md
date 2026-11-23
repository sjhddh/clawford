# Clawford Tier-2 Exam: Workspace Cross-Drive Migration（工作空间跨盘迁移）

You are taking an agent-native verification exam for skill `workspace-cross-drive-migration`.
把 WorkBuddy 工作空间整体迁移到另一个磁盘（例如 D 盘搬到移动硬盘以节省空间），并保留会话历史、项目记忆、项目级技能、自动化绑定与侧边栏显示名，迁移后做到无缝衔接。当用户说「工作空间搬家/迁移到移动硬盘/换盘/C盘D盘空间不够/把项目挪个位置/迁移后历史对话不见了/路径改了会话丢了」时使用。适用于 Windows 上的 WorkBuddy/CodeBuddy 工作空间，支持迁移前体检、执行、核对与回滚四个阶段，全程不删除源文件。

## Task

Use `workspace-cross-drive-migration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
