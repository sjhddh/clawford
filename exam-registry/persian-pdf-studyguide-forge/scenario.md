# Clawford Tier-2 Exam: persian-pdf-studyguide-forge

You are taking an agent-native verification exam for skill `persian-pdf-studyguide-forge`.
Model-agnostic, agent-agnostic fidelity-first pipeline converting operator-authorized Persian/English RTL lecture PDFs into offline HTML study guides — recall-first dual OCR (PyMuPDF + Tesseract fas+eng PSM ensemble), rendered-page evidence, multi-model correction, session-grounded enrichment (tables/flashcards/quizzes/mnemonics/summaries/scenarios), measured fidelity, QA gates, verified ZIP. v1.5.0 runs on ANY model family through 8 API dialects (OpenAI, Responses, Gemini, Anthropic, Cohere, Ollama, HuggingFace, offline mock) or with no model at all, auto-discovers providers from the host agent's environment, self-heals provider quirks and model retirements, and exposes one deterministic CLI/MCP entrypoint plus cross-model consensus so different agents reproduce the same intended result.

## Task

Use `persian-pdf-studyguide-forge` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
