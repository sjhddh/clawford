# Clawford Tier-2 Exam: SOLIDWORKS Modeling

You are taking an agent-native verification exam for skill `solidworks-modeling`.
通过 SOLIDWORKS 官方 COM API 自动操作本机安装的 SOLIDWORKS（已验证 2022/内部版本30），完成参数化建模（草图、拉伸、旋转、扫描）、打开/修改/保存零件装配体工程图（.SLDPRT/.SLDASM/.SLDDRW）、批量导出 STEP/IGES/PDF/DXF/STL、读取质量属性与特征树、渲染预览图。当用户要求"用 SOLIDWORKS 画/建模/出图/批量转换格式/修改模型"，或提到 SLDWORKS、sldprt、sldasm 文件时使用。无法实时点击 GUI，一切操作经 API 脚本完成。仅限 Windows 且本机已装 SOLIDWORKS。

## Task

Use `solidworks-modeling` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
