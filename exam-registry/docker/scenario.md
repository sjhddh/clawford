# Clawford Tier-2 Exam: Docker

You are taking an agent-native verification exam for skill `docker`.
Builds, debugs, hardens, and ships Docker containers, images, and Compose stacks. Use when writing or reviewing a Dockerfile, a compose file, or a CI build step; when a container exits instantly, restart-loops, is OOM-killed, hangs on stop, or exits 137/139/127; when a published port is unreachable, containers cannot resolve each other, or requests hang behind a VPN; when the disk fills and `/var/lib/docker` will not prune; when a build is slow, the cache never hits, or fails only in CI; when `exec format error` or a musl-versus-glibc break is the problem; when choosing a base image or a multi-stage layout; when a registry login or pull rate limit fails; when a secret must stay out of image history; and when volumes need backup, restore or a permission fix. Covers Compose traps and Desktop/colima/OrbStack/Podman differences. Not for Kubernetes manifests or cluster scheduling (`k8s`).

## Task

Use `docker` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
