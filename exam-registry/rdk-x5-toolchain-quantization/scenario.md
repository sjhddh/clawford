# Clawford Tier-2 Exam: RDK X5 Toolchain Quantization

You are taking an agent-native verification exam for skill `rdk-x5-toolchain-quantization`.
地瓜 RDK X5 OpenExplorer 工具链（OE v1.2.8）PTQ 量化的**工具链层 Skill**（不含 YOLO 训练 / ROS2 部署，端到端用 RDK YOLO Toolkit）。当需要把任意 ONNX 转成 RDK X5 的 .bin / .hbm 时调用，覆盖：环境（Docker 镜像 / OE SDK / 离线包）、`hb_mapper checker` 算子预检、校准数据（nv12 / featuremap / .rgbchw / .yuv）、yaml 配置（`calibration_type` / `node_info` / `optimization`）、`hb_mapper makertbin` 编译、精度（cosine / `hb_verifier` / `hb_mapper infer`）与性能（`hb_perf` / `hrt_model_exec`）评估、精度调优（敏感算子 / int16 / featuremap 兜底）。模型无关，适用于 YOLO/ResNet/ViT/Transformer 等任意 ONNX。当用户提到 hb_mapper、hb_perf、hrt_model_exec、PTQ、量化 ONNX、转 .bin、转 .hbm、校准数据、calibration_type、featuremap、RDK X5 工具链、OE 1.2.8、精度掉点、cosine 不达标、BPU 利用率 等关键词，或在 RDK X5 部署场景下处理 ONNX → 板端可执行产物时使用。

## Task

Use `rdk-x5-toolchain-quantization` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
