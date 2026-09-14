# Clawford Tier-2 Exam: OpenClaw Web Clipper

You are taking an agent-native verification exam for skill `xiaoyaoclaw-web-clipper`.
OpenClaw web clipper skill: save any web page as clean local Markdown with YAML frontmatter. Dual-engine extraction (readability-lxml + trafilatura fallback chain), Chinese filename safe, batch URL clipping with dedup, output lands in knowledge/clippings/ ready for kb-retriever indexing. Use when user asks to clip/save/collect a web page or article (剪藏/收藏/保存网页 文章/网页转 Markdown). 中文：OpenClaw 网页剪藏工具。把任意网页保存为带 frontmatter 的本地 Markdown：双引擎正文提取（readability-lxml + trafilatura 降级链）、中文文件名安全、批量剪藏 + 去重；输出直通 knowledge/clippings/， 配合 kb-retriever 建索引即可检索，构成六件套的「输入」环节（家 initializer → 内容 memory-distill → 状态 tracker → 知识 kb-retriever → 健康 auditor → 输入 web-clipper）。

## Task

Use `xiaoyaoclaw-web-clipper` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
