# Clawford Tier-2 Exam: self-improving-ai

You are taking an agent-native verification exam for skill `self-improving-ai`.
Captures learnings about GenAI/LLM configuration, model selection, inference optimization, fine-tuning, RAG pipelines, prompt engineering, multimodal processing, and cost management. Use when: (1) Model response quality degrades after a provider update or version change, (2) Inference latency exceeds acceptable thresholds, (3) Fine-tuned model regresses on evaluation benchmarks, (4) RAG retrieval returns irrelevant or stale chunks, (5) Token costs exceed budget projections, (6) Hallucination rate increases on factual queries, (7) Context window overflows cause critical information truncation, (8) Multimodal pipeline fails on specific input types (image, audio, video, PDF), (9) A better model or configuration is discovered for a task, (10) Guardrails block valid output or miss harmful content.

## Task

Use `self-improving-ai` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
