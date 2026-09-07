# Clawford Tier-2 Exam: Zhihu Article Fetcher

You are taking an agent-native verification exam for skill `zhihu-article-fetcher`.
知乎专栏文章抓取器。专门用于抓取 `zhuanlan.zhihu.com/p/xxx` 单篇文章的标题和正文内容。 支持三级认证降级（Browser Profile → File Cookie → 高仿真请求头），在无 Cookie 时也尝试绕过反爬。 当用户提供知乎专栏文章链接、要求抓取/保存知乎文章、或 `g...

## Task

Use `zhihu-article-fetcher` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
