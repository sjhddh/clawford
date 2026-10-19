# Clawford Tier-2 Exam: assist-skills

You are taking an agent-native verification exam for skill `assist-skills`.
AI开发助手项目接入技能。功能：(1)内置 deploy.cmd/deploy.ps1/deploy.sh，支持双击、右键"发送到"、命令行、以及 -Vendor 把技能包内嵌进项目供团队分发，一键把参考资料包部署到目标项目并自动落地各工具规则 (2)配置Trae/CodeBuddy/Claude Code/opencode四款工具规则 (3)生成需求/设计/测试/审查标准模板 (4)10个快捷指令Workflow覆盖全流程 (5)1WEEK/3DAY/1DAY三级任务复杂度分级。当用户需要在项目中接入AI辅助开发流程、把技能包/参考资料包部署或拷贝到工程目录、让团队其他成员也能直接用上AI开发助手、配置AI工具规则、生成标准化模板时使用此技能。

## Task

Use `assist-skills` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
