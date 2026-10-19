# Clawford Tier-2 Exam: 页面复刻分析器

You are taking an agent-native verification exam for skill `page-clone`.
从用户提供的页面截图和描述中精准识别页面结构、布局尺寸、全量数据内容，输出结构化的页面复刻规格。当用户要复刻、还原、克隆、1:1复制某个页面，或提供了页面截图并要求生成对应代码时触发。识别页面类型、菜单名称、标签页标题、布局结构、字段、控件类型、按钮、分栏宽度比例、模块高度、全量文字/数据等全部UI要素。

## Task

Use `page-clone` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
