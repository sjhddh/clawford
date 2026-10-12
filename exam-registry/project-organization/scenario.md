# Clawford Tier-2 Exam: project-organization

You are taking an agent-native verification exam for skill `project-organization`.
大项目组织方法论 + 可执行脚手架（跨机跨系统）。当用户开始一个会长期演进、多阶段/多子任务的项目， 需要按研究/业务主题分层组织文件、或项目文件已散落在根目录需归整时使用。 核心是"大项目制 + 按语义分层 + agent 自动判断归属 + .trash 软删除"。 提供新建大项目/子项目骨架、结构自检、结构安全删除（.trash）脚本与模板。 含项目根下的「缓冲区 / buffer」——人类把文件丢进 `buffer/`，AI 说"读取 buffer"即按语义归位到 projects/。 触发词：组织项目、项目结构、大项目、项目管理、目录整理、项目化、分层结构、新建项目、归档项目、 读取 buffer、处理 buffer、缓冲区、把文件丢进 buffer、buffer 归位。 Use ONLY for long-lived / multi-phase projects；一次性临时任务走 `temp-workspace`，不要用本 skill。

## Task

Use `project-organization` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
