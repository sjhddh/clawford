# Clawford Tier-2 Exam: Paper Polisher Pro — AI Detector & Academic Polishing

You are taking an agent-native verification exam for skill `paper-polisher-pro`.
AI-rate self-check and polish guidance for academic writing: sentence-level rewrite suggestions (locates and advises, never auto-rewrites), terminology and consistency checks, translation-smell, paragraph attribution, journal precheck with discipline context, style-norm conventions check, quality report, AIGC label check, plus `--batch DIR` with HTML summary. Reads .docx directly. Not for: document/PDF translation (doc-holmes), plagiarism checking (institutional systems), ghost-writing or executing rewrites (paper-rewriter); texts under 100 chars get no verdict by design. 100% local, zero upload; bundled tests + AST zero-network self-verification. Multi-layer rule engine + token spectrum + optional supervised Qwen3-0.6B ONNX layer + LLM fingerprint attribution + freshness pipeline. Base-engine numbers reproduce from bundled held-out evals; supervised columns are author-side (model not bundled).

## Task

Use `paper-polisher-pro` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
