# Clawford Tier-2 Exam: 知乎选题分析器

You are taking an agent-native verification exam for skill `zhihu-topic-finder`.
知乎内容搜索与分析工具。搜索话题热度、分析高价值问题、追踪竞品回答。 面向内容创作者和自媒体运营者，中文优先。 当用户说"搜一下知乎"、"知乎有什么"、"分析知乎问题"、"知乎选题"、"搜知乎"时触发。 Keywords: 知乎, zhihu, 搜索, 问题分析, 选题, 内容创作, 知乎热榜, 知乎搜索.

## Task

Use `zhihu-topic-finder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
