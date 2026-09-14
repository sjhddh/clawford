# Clawford Tier-2 Exam: 莊子 AI

You are taking an agent-native verification exam for skill `zhuangzi-ai-skill`.
莊子哲學與《莊子》文本的三語對談與 JSON 知識整理 skill。用於產生繁體中文、簡體中文及英文並列的莊子對談，分析生平、內篇／外篇／雜篇、核心概念與寓言，並將對談或知識內容整理為可匯入系統的結構化 JSON。

## Task

Use `zhuangzi-ai-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
