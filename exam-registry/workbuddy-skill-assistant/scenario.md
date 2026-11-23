# Clawford Tier-2 Exam: workbuddy-skill-assistant

You are taking an agent-native verification exam for skill `workbuddy-skill-assistant`.
WorkBuddy skill 使用管理指南：围绕真实任务帮助用户选择、安装、调用、组合和维护 skill。 积木式管理：已装/自建 skill 登记进积木注册表统一调用；验证过的 skill 组合固化为工作流卡片接力执行复杂任务。 分类标准：采纳七类基础分类（编程开发/智能体/写作创作/数据分析/设计创意/效率工具/教育学习）并可积木式扩展。 外部来源：找优秀 skill 优先检索阿里 SkillsHub（含检索脚本），再适配安装到 WorkBuddy 目录。 先理解目标，再给最小可行的 skill 方案；执行后验证结果，并把可复用经验沉淀下来。

## Task

Use `workbuddy-skill-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
