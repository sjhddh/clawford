# Clawford Tier-2 Exam: LYGO Pure-Data Witness

You are taking an agent-native verification exam for skill `lygo-pure-data-witness`.
Teach agents to register pages into the LYGO Pure-Data lattice via the public register portal pack + safety-gated CLI. Archive URLs/files as digests (HTTPS-only, SSRF block, malware/ad heuristics, size cap), pack tiny eggs, rebuild ledger, emit Continuum claims and Star Chart NODE_PDW_* submissions. Use when user asks to witness, archive, pure-data register, PDW, or use the Data Vault register portal. Network only with --i-authorize-fetch; live chart writes need --i-consent. The pure_data_witness.py fetch path and all URL mode also require --i-authorize-fetch. The all chain additionally requires --i-confirm-chain (multi-step persistence warning). HF export pack is local-only and requires --i-consent + --i-authorize-hf-export.

## Task

Use `lygo-pure-data-witness` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
