# Clawford Tier-2 Exam: mobile-reading-export

You are taking an agent-native verification exam for skill `mobile-reading-export`.
Turn a Markdown or structured document into formats that actually read well on a phone — a narrow-screen-first responsive HTML, a phone-ratio PDF for WeChat/iOS sharing, and a one-page share card PNG. Use this whenever the user asks how to read a document on their phone, wants a "手机版 / 手机上看 / 发微信 / 发给别人看" version of a long document, complains that a table or PDF is unreadable on a phone, or asks which format to use for mobile reading. Also covers diagnosing and fixing horizontal overflow on narrow viewports, and the Windows headless-Chrome pitfalls that break phone-viewport screenshots.

## Task

Use `mobile-reading-export` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
