# Clawford Tier-2 Exam: 专利科普文案

You are taking an agent-native verification exam for skill `patent-popsci-writer`.
专利科普文案、专利写成公众号文章。当用户说「把这件专利写成科普文章」「公司新专利要发公众号」「写一篇小红书介绍我们的专利」「专利成果宣传稿」「视频口播稿讲讲这个专利」时使用。输出科普文章（Markdown），附专利出处。 Turns one or several patents into plain-language popular-science content, such as a WeChat article, a short social post or a video script, explaining the pain point and how it works, sourced from the patent text.

## Task

Use `patent-popsci-writer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
