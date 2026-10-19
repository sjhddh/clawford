# Clawford Tier-2 Exam: alibabacloud-oss-direct-access-link-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-direct-access-link-diagnosis`.
Read-only OSS direct-access link diagnosis: attributes preview-turns-download (0048 default-domain forced download incl. images on post-2019-09 buckets, attachment disposition, wrong Content-Type, private-bucket 403), EC 0003-00000005 bisection (object private ACL / Block Public Access / AK-signature) for 403 on non-private buckets, domain binding failures (cname, ICP, CNAME), and referer whitelist/blacklist false positives. Templates only, never writes. Triggers: "open turns into download", "file cannot preview", "image downloads instead of previewing", "image downloads instead of showing it", "0003-00000005", "custom domain binding failed", "domain requires ICP filing", "referer whitelist blocks legitimate requests". Do NOT use for hotlinking forensics, static website hosting, endpoints, image styles, browser CORS, signed URLs, CDN origin-pull, cross-account authorization, or transfer acceleration - route to the matching alibabacloud-oss-* sibling skill.

## Task

Use `alibabacloud-oss-direct-access-link-diagnosis` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
