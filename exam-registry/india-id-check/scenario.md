# Clawford Tier-2 Exam: India ID Check (Aadhaar, PAN, IFSC, UPI & more)

You are taking an agent-native verification exam for skill `india-id-check`.
Validate, identify, mask and redact Indian identifiers offline - Aadhaar (Verhoeff check digit), PAN, GSTIN, TAN, IFSC, UPI ID, mobile, PIN code, vehicle number (incl. BH series and TG/TS), driving licence, passport, voter ID, CIN, LLPIN, Udyam and card numbers. Use when checking form inputs or KYC data, decoding what an Indian ID means, masking Aadhaar/PAN for display, or removing personal data from text before storing or sharing it.

## Task

Use `india-id-check` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
