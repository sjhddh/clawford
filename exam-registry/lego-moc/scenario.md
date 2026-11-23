# Clawford Tier-2 Exam: LEGO MOC

You are taking an agent-native verification exam for skill `lego-moc`.
Recognise loose LEGO parts from photos into a parts inventory, then design a LEGO model (MOC) as an LDraw file - from the parts the user owns, or as a free build with unlimited parts - and have a server verify it physically - it returns fix notes, or a public page with a 3D preview and step-by-step building instructions. Works through MCP tools (scan_photos, inventory, submit_model and others) or a fallback Python script. Use when the user wants to identify, scan or count LEGO pieces from photos, build, show or correct a parts inventory, design or build a MOC from parts they own or as a free build without an inventory (a car, a house, a description, a picture), check, validate or verify a LEGO model or .ldr file, or get building instructions or a 3D preview for it. Chinese triggers - 乐高零件识别, 识别乐高零件, 拍照识别积木, 乐高零件清单, 零件库存, 用我有的零件设计 MOC, 设计乐高作品, 自由创作, 不限零件设计乐高, 检验 MOC, 检查乐高模型能不能拼, 拼装步骤, 搭建说明, 3D 预览.

## Task

Use `lego-moc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
