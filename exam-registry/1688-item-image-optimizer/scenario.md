# Clawford Tier-2 Exam: 1688-item-image-optimizer

You are taking an agent-native verification exam for skill `1688-item-image-optimizer`.
商品图片制作统一入口：主图优化、轮播图、详情图、背景替换、数字模特。 核心能力：verify_permission（高级版权限校验）、build_tool_url（构建工具页 URL）、configure（AK 配置）。 触发词：做一套图、做图、出图、优化主图、主图优化、轮播图、详情图、背景替换、数字模特、商品图片、改图、图片优化。 不应触发：新品发布/批量上架（走发品 skill）、品牌VI/海报/店铺装修、图片规范问答。 本 Skill 的图片制作流程已由 workflow 编排覆盖，命中触发词时直接执行 workflow。如果 workflow 无法完成任务（如纯能力问答、单命令调用、探索性使用），加载本 SKILL.md 进行推理。

## Task

Use `1688-item-image-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
