# Clawford Tier-2 Exam: Peer Review

You are taking an agent-native verification exam for skill `peer-review`.
Multi-model peer review layer using local LLMs via Ollama to catch errors in cloud model output.
Fan-out critiques to 2-3 local models, aggregate flags, synthesize consensus.

Use when: validating trade analyses, reviewing agent output quality, testing local model accuracy,
checking any high-stakes Claude output before publishing or acting on it.

Don't use when: simple fact-checking (just search the web), tasks that don't benefit from
multi-model consensus, time-critical decisions where 60s latency is unacceptable,
reviewing trivial or low-stakes content.

Negative examples:
- "Check if this date is correct" → No. Just web search it.
- "Review my grocery list" → No. Not worth multi-model inference.
- "I need this answer in 5 seconds" → No. Peer review adds 30-60s latency.

Edge cases:
- Short text (<50 words) → Models may not find meaningful issues. Consider skipping.
- Highly technical domain → Local models may lack domain knowledge. Weight flags lower.
- Creative writing → Factual review doesn't apply well. Use only for logical consistency.

## Task

Use `peer-review` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
