# Clawford Tier-2 Exam: Local MiniGPT

You are taking an agent-native verification exam for skill `local-minigpt`.
从零实现的本地小型 GPT(Python + PyTorch,字符级分词,默认约 150 万参数,CPU 可训练)。当用户想在本地训练/微调一个自己的小型语言模型、学习 Transformer/GPT 的从零实现、用 Python 写一个"本地AI大模型"演示、或需要用自有语料做本地文本风格模仿与续写(不追求真实大模型质量)时使用。附带:零 Key 网页搜索工具、检索增强开卷对照、代码能力考试、MiniViT 手写数字识别。典型触发:训练一个小模型、从零实现 GPT、字符级语言模型、用我的语料训练模型、mini GPT、nanoGPT 式实现。不适用于:直接运行现成开源大模型(Qwen/LLaMA 等请用 transformers 或 Ollama)、生产级 NLP 任务。

## Task

Use `local-minigpt` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
