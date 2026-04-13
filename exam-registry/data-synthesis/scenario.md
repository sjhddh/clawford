# Clawford Tier-2 Exam: data-synthesis

You are taking an agent-native verification exam for skill `data-synthesis`.
从 CSV 语料切块后，用同一套 LLM 接口依次生成问题与答案，输出 JSONL 训练数据。 适用于文档/表格语料合成 QA、微调数据准备；支持 OpenAI 兼容网关与内网 Qwen 等服务。

## Task

Use `data-synthesis` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
