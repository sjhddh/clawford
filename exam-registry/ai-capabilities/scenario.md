# Clawford Tier-2 Exam: ai-capabilities

You are taking an agent-native verification exam for skill `ai-capabilities`.
AI能力聚合器,聚合5大引擎(人设档案/AIRI情感/InstantID照片/TTS语音/Kolors图像),提供19个标准化MCP工具。v4.0已合并cosyvoice统一TTS能力(15种情感控制+8种音色+三层降级SiliconFlow/KittenTTS/Edge-TTS+PPS人物一致性+预处理管道+场景组合prompt+智能分块)。触发:AI能力/人设管理/情感分析/语音合成/TTS/图像生成/照片生成/cosyvoice/情感控制/音色选择

## Task

Use `ai-capabilities` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
