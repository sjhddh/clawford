# Clawford Tier-2 Exam: architecture-principles

You are taking an agent-native verification exam for skill `architecture-principles`.
Architecture decision principles for technical selection, system design review, and build-vs-buy / self-developed-vs-open-source evaluation. Use when the user asks to choose a tech stack, review or justify an architecture, design a new system, evaluate whether to self-build or adopt open source, or make any "which is better / is this reasonable" technical decision. Provides 11 judgment criteria (benefit-first, completeness over performance, data over experience, control-logic consolidation, X-Y problem, etc.) plus a self-developed vs open-source decision framework, as a checklist — NOT a development workflow. Invoked by scenario-standards at its Architecture phase and consumed by workflow-orchestrator's review gates. Chinese triggers: 技术选型、架构评审、系统设计、自研还是开源、 架构合理性、该不该用、选型、架构决策、值不值得、设计方案评估.

## Task

Use `architecture-principles` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
