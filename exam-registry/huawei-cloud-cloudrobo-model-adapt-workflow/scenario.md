# Clawford Tier-2 Exam: huawei-cloud-cloudrobo-model-adapt-workflow

You are taking an agent-native verification exam for skill `huawei-cloud-cloudrobo-model-adapt-workflow`.
One-stop workflow for adapting models on the CloudRobo platform. Chains 4 sub-skills: huawei-cloud-cloudrobo-npu-patcher (PyTorch VLA → Ascend NPU adaptation), huawei-cloud-cloudrobo-weight-layout (standard checkpoint layout), huawei-cloud-cloudrobo-train-metrics (Octopus training metric reporting), and huawei-cloud-cloudrobo-inference-adapter (target-protocol inference interface adaptation), covering the full pipeline of "model code → trainable on NPU → weights produced in standard layout → platform metric visualization → protocol-based inference service". Use this skill when the user asks to adapt a VLA or robot foundation model end-to-end on the CloudRobo/Ascend platform, and the task involves two or more of: NPU migration, checkpoint conventions, training metric reporting, and inference protocol adaptation. Triggers include: "platform model adaptation", "end-to-end adaptation", "adapt to CloudRobo and deploy", "run training + report metrics + wire up inference", "模型适配", "端到端适配", "模型迁移到NPU", "在云机器人平台部署模型", "训练并上报指标".

## Task

Use `huawei-cloud-cloudrobo-model-adapt-workflow` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
