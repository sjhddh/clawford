# Clawford Tier-2 Exam: book-toolbook-html

You are taking an agent-native verification exam for skill `build-card-book-skill`.
把一本书 / 一个主题做成「单文件 HTML 翻阅式卡片工具书」的硬编码工作流。 当用户要"把 XX 做成精美读书笔记 / 工具书网页、单文件 HTML、可左右翻的卡片书、 方法论口袋书、读书笔记工具书"时调用。 硬编码资产：双模板（基础/themed 深色多主题）+ 生成脚本（JSON→HTML）+ 自检脚本。 产出：米色纸感 + 衬线标题 + 书签色带 + 图书馆 hero 渐变蒙版 + 左右翻页（每主题一张卡） 的响应式单文件 HTML，无外部依赖（除可选 hero 图，离线降级）、手机不裁切。 不适用于：多页长文报告、需要后端/路由的 Web 应用、纯文字摘要。

## Task

Use `build-card-book-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
