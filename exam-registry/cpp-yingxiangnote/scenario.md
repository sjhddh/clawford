# Clawford Tier-2 Exam: C++课件 → 印象笔记

You are taking an agent-native verification exam for skill `cpp-yingxiangnote`.
把 C++ 课件 / 讲义类 PDF 提取整理成结构化笔记，并以「印象笔记超级笔记原生格式」写入指定笔记本。当用户提供 C++ 课件 PDF（或其它课程 PDF）并说「整理到印象笔记」「存到印象笔记的 XX 笔记本」「做成笔记放进印象笔记」「pdf 转印象笔记笔记」时使用。也适用于需要把已整理好的 Markdown 转成印象笔记原生格式（可折叠标题大纲 + 原生代码块 + 原生表格）的场景。本 skill 内含 PDF 文字/表格提取能力（pymupdf），扫描版页面会自动渲染为图片交由视觉识别，因此无需额外安装 pdf-image-text-extractor。别名 c++yingxiangnote、c++印象笔记笔记。关键词：课件、讲义、pdf、提取文字、整理笔记、印象笔记、超级笔记、string、C++。

## Task

Use `cpp-yingxiangnote` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
