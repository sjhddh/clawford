# Clawford Tier-2 Exam: prompt-compressor

You are taking an agent-native verification exam for skill `prompt-compressor`.
当用户说『提示词太长/token烧太快』『上下文塞不下了』『把这段压缩一下还别丢重点』『长文档怎么塞进窗口』，或要压低 agent 每轮上下文成本时使用。基于「信息密度」裁剪：保留关键词密集/位置靠前的句子，删冗余/客套/复述，给出可运行脚本（提示压缩器，按密度+位置打分删句）。与 context-engineering 互补：context 管『放什么』，compressor 管『怎么压短』。理论根基：LGD 三律之收敛（删除冗余，单一有效信息）。触发词：提示压缩、prompt压缩、上下文压缩、压缩token、长文本精简、context压缩、省token、摘要进窗口、prompt shorten。

## Task

Use `prompt-compressor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
