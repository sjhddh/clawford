# Clawford Tier-2 Exam: tao-port-huggingface-model

You are taking an agent-native verification exam for skill `tao-port-huggingface-model`.
Integrate a HuggingFace Computer Vision model into the NVIDIA TAO Toolkit ecosystem (tao-core config, tao-pytorch trainer, tao-deploy TensorRT pipeline). Use when the user asks to "integrate a HuggingFace model into TAO", "add an HF model to TAO Toolkit", "wire a HuggingFace ViT/DETR/ SegFormer into tao-pytorch", "build a TAO trainer + deploy pipeline for an HF CV model", or pastes a HuggingFace model URL/ID and wants it turned into a TAO model. Covers the full 7-phase loop: prerequisites check, HuggingFace inspection and validation, codebase exploration, tao-core configuration and native trainer implementation, ONNX export plus TensorRT deploy integration, packaging and L0 testing, container-based end-to-end validation, and (conditional) accuracy/latency tuning. Supports classification, object detection, semantic / instance / panoptic segmentation, zero-shot detection, and depth estimation.

## Task

Use `tao-port-huggingface-model` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
