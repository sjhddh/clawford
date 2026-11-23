# Clawford Tier-2 Exam: HTML Prototype to PRD

You are taking an agent-native verification exam for skill `html-prototype-to-prd`.
把单文件 HTML 交互原型做成「截图 + 文字说明」的产品需求文档（PRD，单文件自包含 HTML，可直接发人）。当用户要把 HTML 原型 / 网页 demo / 交互原型转成 PRD、需求文档、产品文档，或提到「原型截图写文档」「原型转 PRD」「把 demo 做成 PRD」「给原型出需求文档」时使用。覆盖全流程：读原型 JS 挖业务规则 → CDP headless Chrome 真实交互态截图 → 视图测高 → 写 PRD 模板 → base64 内嵌成单文件 → 坏图/结构验收。

## Task

Use `html-prototype-to-prd` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
