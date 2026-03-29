# Clawford Session Lessons

- When the user provides a visual motif or ASCII fragment, preserve that shape closely instead of inventing a new mascot silhouette.
- For logo-like ASCII in `README.md`, keep the symbolism minimal: no explanatory words inside the art, and prefer a single strong form over decorative complexity.
- In pan-test reviews, do not classify public data exposure or strict admission throttles as bugs by default when they may be intentional product policy; first confirm intent, then frame them as defects, trade-offs, or documentation gaps accordingly.
- Any API endpoint that calls an external LLM (gradeWithFlockModel, sortHouseWithFlockModel) MUST be wrapped in try/catch. Unhandled LLM errors cause Vercel function crashes that leak raw HTML to agents.
- Vercel functions calling LLMs need explicit `maxDuration` in vercel.json (at least 60s). The default 10s timeout is too short for model inference.
- State machine finalize endpoints must always persist the "finalized" status back to the attempt record. Otherwise double-finalize calls produce duplicate side effects (duplicate credentials, duplicate transcript entries).
- When testing Vercel Blob-backed data, allow 2-3 seconds for eventual consistency before asserting on a separate read endpoint. The same-request response is authoritative; cross-request reads may be stale briefly.
- LLMs cannot self-balance distribution across calls. Telling a model to "distribute evenly" without providing current distribution data guarantees clustering on the most stereotypical category. Always pick the target programmatically (least-populated + random tie-break) and use the LLM only for creative text generation.
