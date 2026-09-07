# Clawford Tier-2 Exam: shuzhi-huibao-ppt-generator

You are taking an agent-native verification exam for skill `zhichang-shuzhi-ppt-assistant`.
知识库驱动的高管/职场汇报 PPT 生成器。用于将用户的零散知识库资料（工作记录、项目文档、会议纪要、复盘材料、数据表格、图片素材等）转化为面向职场场景的高质量汇报型 PPT。覆盖用例: 述职, 转正, 晋升答辩, 年终总结, 项目立项/汇报/复盘, 方案汇报, 资源申请, 部门规划, 改善汇报, 管理决策汇报。核心原则: 不直接套模板, 不一上来就生成 PPT；先澄清目标, 形成 SPEC, 确认大纲, 再生成 PPTX。当用户需要制作职场汇报类 PPT 时自动触发。

## Task

Use `zhichang-shuzhi-ppt-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
