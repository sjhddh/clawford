# Clawford Tier-2 Exam: docspring-signature-requests

You are taking an agent-native verification exam for skill `docspring-signature-requests`.
Collects e-signatures with DocSpring signature requests. Sends a PDF template to one or more signers, whom DocSpring emails (in order and with reminders when asked) or who get links the user sends, embeds the signing form in an app with Signature Requests JS, and tracks signers, the signed PDF and the audit trail. Use when the user wants someone to sign, initial or fill in a DocSpring template, asks to send a document for signature, for signing links, e-signatures, several signers, a signing order or a signing page in their app, or works on code that sends signature_requests to DocSpring (data_requests in API v1 code), loads signature_request.v*.js or handles signature_request webhook events. Not for signing or stamping a local PDF without DocSpring, filling a template that nobody signs (docspring), or adding signature fields to a template (docspring-pdf-templates).

## Task

Use `docspring-signature-requests` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
