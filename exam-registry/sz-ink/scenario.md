# Clawford Tier-2 Exam: sz-ink

You are taking an agent-native verification exam for skill `sz-ink`.
研墨（sz-ink）——中文文本去AI味改写器：基于汉语言文学研究（语体学/词汇学/修辞学/语篇学）提供鉴别力， 不靠禁词表和同义词硬换。整体体检（九项统计指标+语体条件阈值）→ 定点干预（每轮≤3处， 按"症状→判据→动作→对照例"处方卡执行）→ 语义保真审核（锚点+论点清单，漂移即回滚）→ 回测交付。可区分黑话型/文案腔型/洗稿型三种AI味；任意文体均可输入（探店/博客/周报/信件乃至 单段片段，三语体就近归属，片段自动降级），支持按用户自带样本提取风格档案（"像谁"）。 Use when：用户给出现成的 AI 生成或 AI 腔明显的中文文本，要求"去AI味/改自然/像人写的/降AI感"； 或用户提供自己写的段落做风格参照后要求按其风格改写。Skip for：从零代写新文章（那是写作类 skill 的活）；英文本改写；诗歌、法律条文、合同等不允许改动表达的文本；用户只想检测AI率不改稿 （本 skill 改写优先）。

## Task

Use `sz-ink` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
