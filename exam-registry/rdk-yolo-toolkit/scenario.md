# Clawford Tier-2 Exam: RDK YOLO Toolkit

You are taking an agent-native verification exam for skill `rdk-yolo-toolkit`.
端到端 YOLO 训练 → 地瓜 RDK X5 BPU 量化部署：Monkey Patch ONNX 导出 → hb_mapper 量化 → 板端 hbm_runtime 推理 → TROS HobotDnn ROS2 实时检测。支持 YOLOv5u~YOLOv13 和 YOLO26 全系列。内含工艺原理速查（why this ONNX, why this yaml）。

## Task

Use `rdk-yolo-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
