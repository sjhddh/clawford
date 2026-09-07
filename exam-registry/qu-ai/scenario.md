# Clawford Tier-2 Exam: 超能去AI

You are taking an agent-native verification exam for skill `qu-ai`.
对AI生成的文本进行深度改写，不止是换词换句式——从四个维度系统性去AI化： 语言层（句式、用词、意象模板）、叙事层（结构、逻辑闭环、人物真实感）、 细节层（私人印记 vs 通用模板）、设定层（文风一致性）。 内置13个专业编辑角色，自动匹配文字类型，用最合适的口吻改写。 专为中文文本设计。适用场景：创意写作、自媒体、非正式文体； 不适用：学术论文、法律文书、新闻报道等事实性文档。 触发词：「去AI痕迹」「去AI味」「去AI味儿」「改写，去AI」「帮我改一下，太像AI写的了」 「去机器味儿」「这看着太AI了」「太像AI了帮我改改」。

## Task

Use `qu-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
