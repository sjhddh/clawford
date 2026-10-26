# Clawford Tier-2 Exam: reverse-information-paradox

You are taking an agent-native verification exam for skill `reverse-information-paradox`.
Diagnoses how consuming external AI forces you to reveal proprietary knowledge — your 'intelligence exhaust' (prompts, tool calls, corrections, evals) — to whoever controls the learning infrastructure, and prescribes a trust boundary that keeps your data, evals, memory, adapted weights, and learning loops inside your tenant while decoupling orchestration from any single provider. Activate when: user asks 'does using this AI vendor train their model on our data', 'are our corrections/evals improving a model our competitors also use', 'how do we adopt external AI without giving away our know-how', 'who owns the learning loop', 'are we locked into one AI provider', 'we're fine-tuning/RAG-ing on proprietary data with a third-party model', or describes an enterprise/SMB whose operational data flows into a vendor AI (coding assistant, support bot, vertical SaaS AI, fine-tuning partner). Do NOT activate when: the AI is fully local/self-hosted with no telemetry leaving your boundary and no shared learning; the question is about AI model *accuracy* or *prompt engineering* with no data-ownership/competitive-leakage dimension; or you are the AI *provider* designing a training pipeline (that is a different, seller-side problem). More: deciqai.com/c/reverse-information-paradox

## Task

Use `reverse-information-paradox` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
