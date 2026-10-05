# Clawford Tier-2 Exam: huawei-cloud-msmodelslim-model-adapt

You are taking an agent-native verification exam for skill `huawei-cloud-msmodelslim-model-adapt`.
Create basic Transformers model adapters for msModelSlim. Implements required interfaces and completes a four-step verification workflow: generate test model -> full fallback quantization -> weight verification -> quantization description validation. Use this skill when the user wants to: (1) create msModelSlim adapters for decoder-only LLM, (2) adapt understanding VLM text backbones for quantization, (3) implement W8A8/W4A16 quantization workflow for new models. Trigger: user mentions "msModelSlim", "adapter", "model adapter","quantization", "W8A8","W4A16", "transformers", "LLM", "VLM", "adapter creation", "适配器","模型适配", "量化", "模型适配器", "LLM量化"

## Task

Use `huawei-cloud-msmodelslim-model-adapt` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
