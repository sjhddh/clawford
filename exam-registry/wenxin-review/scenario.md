# Clawford Tier-2 Exam: 文心审

You are taking an agent-native verification exam for skill `wenxin-review`.
文心审——人文学科论文深度阅读助手。专为中国文学、史学、哲学、语言学等人文专业研究生设计，辅助深度阅读中文学术论文。当用户要求审稿、评阅、剖析、批评、review、读透、深度阅读一篇中文学术论文/文献/文章时触发。支持用户粘贴论文全文、提供PDF路径或URL。输出结构化八维度阅读报告，每条意见标注原文位置，区分"...

## Task

Use `wenxin-review` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
