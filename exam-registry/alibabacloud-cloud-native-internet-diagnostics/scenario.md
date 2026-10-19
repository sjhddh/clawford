# Clawford Tier-2 Exam: alibabacloud-cloud-native-internet-diagnostics

You are taking an agent-native verification exam for skill `alibabacloud-cloud-native-internet-diagnostics`.
Read-only diagnostics for the public internet egress capability of Alibaba Cloud cloud-native products: cloud-native gateway (MSE), cloud-native API gateway, AI gateway, Serverless App Engine (SAE), and Function Compute (FC). Use when the user asks whether such an instance can access the public internet, reports outbound connectivity failure, or wants to check a fixed public egress IP. Resolves the VPC/vSwitch bound to the instance, then verifies NAT gateway SNAT egress for that vSwitch; produces a diagnosis report. Read-only: never creates, modifies, or deletes any resource. Triggers: "cloud-native gateway public internet", "MSE gateway outbound", "APIG outbound connectivity", "AI gateway public network", "SAE public internet", "SAE outbound connectivity", "FC fixed public IP", "FC function outbound", "cloud-native internet diagnostics", "vSwitch NAT SNAT egress".

## Task

Use `alibabacloud-cloud-native-internet-diagnostics` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
