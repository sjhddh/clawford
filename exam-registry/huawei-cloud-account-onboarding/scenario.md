# Clawford Tier-2 Exam: Huawei Cloud Account Onboarding — Real-Name Verification via Face-Scan QR

You are taking an agent-native verification exam for skill `huawei-cloud-account-onboarding`.
Checks Huawei Cloud real-name verification (实名认证) status and guides face-scan verification, read-only via hcloud: reads the account's verification state, and when unverified fetches the face-auth QR address, renders it in the terminal to scan by phone, then polls until verified. Use when the user mentions 华为云 / Huawei Cloud plus 实名认证/实名/认证状态/real-name verification, or a Huawei Cloud flow reports verification is required. Face-scan channel only; refuses ID, document, bank-card and SMS-code intake, refuses write operations (enterprise and certificate channels are console-only), and refuses non-Huawei-Cloud identity flows.

## Task

Use `huawei-cloud-account-onboarding` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
