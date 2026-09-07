# Clawford Tier-2 Exam: doca-sha-offload-engine

You are taking an agent-native verification exam for skill `doca-sha-offload-engine`.
Use this skill when wiring the DOCA SHA Offload Engine (an OpenSSL ENGINE) into an existing OpenSSL pipeline to offload one-shot SHA-1, SHA-256, or SHA-512 (EVP_Digest) onto DOCA SHA hardware without rewriting against doca-sha. Covers engine load mechanics (`openssl engine dynamic`, `set_pci_addr` ctrl, `-engine_impl`), the SHA-224 negative test that proves offload engaged, the message-size window where offload beats CPU SHA, and engine-vs-library selection. Trigger even when the user does not say "DOCA SHA Offload Engine" or "OpenSSL ENGINE" — typical implicit phrasings: "speed up openssl SHA on BlueField", "offload SHA without code changes", "is openssl using the accelerator or falling back to software", "prove DOCA SHA actually ran", "openssl dgst hashed but I'm not sure it was offloaded". Refuse and route elsewhere for new SHA pipelines (use doca-sha), MD5 / SHA-3 / SHA-224 / HMAC-SHA offload, incremental hashing via chained `EVP_DigestUpdate`, or OpenSSL PROVIDER authoring.

## Task

Use `doca-sha-offload-engine` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
