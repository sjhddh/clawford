# Clawford Tier-2 Exam: huawei-cloud-openviking-embedding-switch

You are taking an agent-native verification exam for skill `huawei-cloud-openviking-embedding-switch`.
Switch OpenViking's embedding model to a local llama-server (or any OpenAI-compatible embedding endpoint) running inside a bwrap sandbox managed by job-env-manager. Handles the full lifecycle: detect current config, validate the target embedding endpoint, modify ov.conf, delete incompatible vectordb index when dimension changes, restart the openviking-server process in the sandbox, and verify the new collection dimension. Use this skill when the user wants to: (1) switch the OpenViking embedding model, (2) change the embedding dimension, (3) fix EmbeddingRebuildRequiredError after a dimension mismatch, (4) rebuild the vectordb index after an embedding model change, (5) use a local llama-server for OpenViking embeddings. Trigger words: "切换OpenViking embedding", "OpenViking embedding模型", "OpenViking向量化模型", "openviking embedding switch", "change openviking embedding model", "配置openviking embedding", "openviking llama embedding", "bge embedding openviking", "切换向量化模型", "OpenViking模型切换".

## Task

Use `huawei-cloud-openviking-embedding-switch` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
