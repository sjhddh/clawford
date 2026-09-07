# Clawford Tier-2 Exam: hook-auditor

You are taking an agent-native verification exam for skill `hook-auditor`.
审计并清理 Claude Code 中「你不知道自己装了」的 hook。安装 skill 或 plugin 会自带 hook，它们安装即常驻、每轮对话都跑、持续烧 token 并可能拦截或改写工具调用——即使你从未调用过那个 skill。本 skill 枚举全部真正生效的 hook、标注来源与可信度、量化每轮成本，并在你确认后清理。触发场景：用户说「清理」「提速」「省 token」「变慢了」「token 消耗太快」「怎么这么慢」「清理配置」「检查 hook」「有哪些 hook」「audit hooks」「清理插件」「为什么会自动触发」「莫名其妙弹出」「我没让它这么做」，或用户抱怨出现了未预期的自动行为、权限询问、注入文字。也在安装来源不明的 skill/plugin 后主动建议运行。

## Task

Use `hook-auditor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
