# Clawford Tier-2 Exam: ai-guardian

You are taking an agent-native verification exam for skill `ai-guardian`.
Use this skill whenever the user needs to observe or govern on-endpoint local LLMs running on Ollama, llama.cpp (llama-server), LM Studio, or a local single-node vLLM — inventory installed/running models with an allow/deny verdict (shadow-AI detection), inspect VRAM residency, model license/params/capabilities and server version, view the model policy, detect model provenance/digest drift (re-pulled or tampered weights; strong for Ollama/llama.cpp, id-only and honestly weaker for LM Studio/vLLM), scan a prompt for secrets / PII / source-code / jailbreak with a weighted risk band, route a prompt THROUGH a guard that scans + policy-gates + records + runs-if-allowed (guarded_generate / observe_chat), query the observed-usage log, and roll up anomalies (shadow models, digest drift, high-risk + blocked prompts). Always use this skill for "what local models are installed", "find shadow / unsanctioned AI models", "which model is loaded in VRAM", "scan this prompt for secrets/PII before sending", "stop secrets leaking into a local model", "block a prompt with an API key", "detect a jailbreak / prompt injection", "set a model allowlist / denylist", "detect a tampered / re-pulled model", "audit local LLM usage", "guard my llama.cpp / LM Studio / local vLLM endpoint", or "the complement to IGEL AI Armor". Do NOT use for GPU inference CLUSTERS (multi-node / fleet-scale vLLM / Ray serving) — this is for single-endpoint LOCAL LLMs; point cluster/serving work to inference-aiops. Also not for hypervisors, storage, backup, Kubernetes, or network devices. Passive inventory/state auditing plus opt-in route-through content governance, with a bundled governance harness (audit, policy, token budget, undo, risk-tiers). A transparent capture proxy is v0.2 roadmap.

## Task

Use `ai-guardian` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
