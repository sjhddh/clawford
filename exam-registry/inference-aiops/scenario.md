# Clawford Tier-2 Exam: inference-aiops

You are taking an agent-native verification exam for skill `inference-aiops`.
Use this skill whenever the user needs to operate a GPU inference cluster — vLLM (OpenAI API + Prometheus /metrics) and Ray Serve / Ray Jobs (Ray dashboard), plus the single-process serving engines SGLang and TGI (Text Generation Inference): a one-shot cluster overview (deployments + total replicas + queue backpressure), request metrics (TTFT / TPOT / e2e latency + token totals), queue depth, KV-cache stats (utilisation, prefix-cache hit rate, preemptions), the flagship latency root-cause analysis (diagnose_latency_spike / diagnose_engine_latency) and low-utilisation RCA, engine-agnostic health + running-model inventory across vLLM/SGLang/TGI, Ray Serve autoscaling and scaling (scale up/down, scale-to-zero, drain a replica), LoRA load/unload, base-model hot-swap, deploy/undeploy/redeploy, prefix-aware routing, GPU utilisation, Ray jobs, and cost per million tokens. Always use this skill for "why is inference slow", "TTFT spike", "latency spike", "GPU underutilised", "scale down the deployment", "scale to zero", "drain a replica before a reboot", "hot-swap the base model", "load a LoRA adapter", "KV cache pressure", "prefix cache hit rate", "queue backpressure", "autoscale config", "SGLang health", "TGI metrics", or "cost per token" when the context is a vLLM / SGLang / TGI / Ray Serve inference cluster. Do NOT use for non-inference infrastructure (hypervisors, storage appliances, backup products, general container/cluster workloads, network devices, or OT/industrial equipment) — those belong to other AIops-tools; this skill is scoped to GPU inference serving (vLLM + Ray). Governed vLLM + Ray inference operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers).

## Task

Use `inference-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
