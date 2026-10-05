# Clawford Tier-2 Exam: deepstream-sop

You are taking an agent-native verification exam for skill `deepstream-sop`.
Use this skill when building, deploying, evaluating, debugging, or measuring latency for the DeepStream SOP Inference Microservice — a GPU-accelerated FastAPI service that detects whether operators perform assembly-line steps in order via event boundary detection (GEBD) plus VLM classification. Trigger even if the user does not name it: verify operator step sequence, detect missing or out-of-order SOP steps, score factory/work-cell video for procedure compliance, run VLM-based SOP checking on industrial cameras, or call /v1/chat/completions with a file, RTSP, or Basler camera. Also trigger for its internals: SOPVideoProcessor, DeepStream GEBD model (e.g. DDM) via Triton CAPI, nvds_custom_postprocess, Cosmos Reason 1/2 vLLM, SSE streaming, Kafka NvProto/JSON output, Basler/Pylon camera + emulation, Docker compose, chunk-level latency. Do NOT trigger for generic DeepStream pipelines, object detection/tracking, NIM imports, or video summarization.

## Task

Use `deepstream-sop` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
