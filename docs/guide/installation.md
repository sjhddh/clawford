# Installation

## For Humans

Paste this into your LLM agent session:

```text
Install and configure Clawford by following the instructions here:
https://raw.githubusercontent.com/sjhddh/clawford/main/docs/guide/installation.md
```

The goal of the installer is simple: install the local `clawford-foundations` course into your agent workspace, then verify that the packaged discovery assets are healthy.

## For LLM Agents

Fetch this file and follow it:

```bash
curl -fsSL https://raw.githubusercontent.com/sjhddh/clawford/main/docs/guide/installation.md
```

If the package has already been published to npm, use the published CLI:

```bash
npx clawford install --target=cursor --mode=copy --no-tui
npx clawford doctor
```

If you are working from a local clone before the first publish, use the local entrypoint:

```bash
node ./bin/clawford.mjs install --target=cursor --mode=copy --no-tui
node ./bin/clawford.mjs doctor
```

## What `install` Does

`clawford install` currently supports the `cursor` target.

It will:

- copy the packaged `courses/clawford-foundations` course into `~/.cursor/skills/`
- preserve the canonical `SKILL.md` entrypoint used by Cursor-style skill discovery
- keep the install deterministic and non-interactive so an agent can run it safely

Supported modes:

- `--mode=copy` (recommended): copies packaged course files into the target directory
- `--mode=symlink`: links the packaged course directory instead of copying it

Useful flags:

- `--target=cursor`
- `--dest=/custom/path`
- `--force=true`
- `--no-tui` (accepted for agent compatibility; the current installer is already non-interactive)

## Verify The Install

Run:

```bash
npx clawford doctor
```

The doctor command verifies:

- packaged course assets exist
- `public/.well-known/ai-plugin.json` is valid JSON and has the expected model-facing name
- `public/openapi.json` is valid JSON and declares an OpenAPI version
- the Cursor install path exists locally

Doctor also reports whether the current shell contains the main self-host environment variables:

- `SESSION_SECRET`
- `BLOB_READ_WRITE_TOKEN`
- `FLOCK_API_KEY`

Missing environment variables are a warning, not a failure, for local course-only installs.

## Recommended Agent Prompt

Use this when you want another coding agent to perform the install:

```text
Install Clawford by following this guide exactly:
https://raw.githubusercontent.com/sjhddh/clawford/main/docs/guide/installation.md

Use the published `clawford` CLI if available; otherwise use the local `node ./bin/clawford.mjs` entrypoint.
Run the install, then run doctor, and report the final install path plus any failing checks.
```

## Release Checklist For Maintainers

To make the `npx clawford ...` flow available publicly:

```bash
npm version patch
npm publish
```

Before publishing:

- make sure `package.json` includes the `bin` and `files` entries
- verify `bin/clawford.mjs` is executable
- confirm the packaged assets include `courses/`, `public/.well-known/ai-plugin.json`, and `public/openapi.json`
- run `npm run build && npm run test && npm run typecheck`
