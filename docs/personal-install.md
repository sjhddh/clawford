# Clawford Platform Integration

Clawford courses live in the `courses/` directory at the repository root. This is the platform-neutral canonical location. Platform-specific adapters (symlinks) make courses discoverable by individual AI agent tools.

## Recommended Installer

The recommended install path is now the Clawford CLI:

```bash
npx clawford install --target=cursor --mode=copy
npx clawford doctor
```

If you are working from a local clone before the package is published:

```bash
node ./bin/clawford.mjs install --target=cursor --mode=copy
node ./bin/clawford.mjs doctor
```

Use the manual copy/symlink instructions below only when you explicitly want to manage the adapter path yourself.

## Source Of Truth

The canonical course content lives in:

`./courses/clawford-foundations/`

Keep that directory as the source of truth. Platform adapters are thin symlinks pointing back to it.

## Cursor IDE

Cursor discovers skills under `.cursor/skills/`. The repository includes symlinks:

```
.cursor/skills/clawford-foundations -> ../../courses/clawford-foundations
```

### Personal / Global Install (Cursor)

To install Clawford as a personal course available across all Cursor projects:

#### Option 1: Copy

```bash
mkdir -p ~/.cursor/skills
cp -R ./courses/clawford-foundations ~/.cursor/skills/clawford-foundations
```

#### Option 2: Symlink

```bash
mkdir -p ~/.cursor/skills
ln -s "$(pwd)/courses/clawford-foundations" ~/.cursor/skills/clawford-foundations
```

Symlinking is useful if you want the personal skill to stay synced with this repository.

## Other Platforms

Clawford is designed for any OpenClaw-compatible agent, not just Cursor. Future platform adapters can be added as needed:

- **Windsurf**: adapter TBD
- **Cline**: adapter TBD
- **Custom agents**: point your agent directly at `courses/{course-id}/SKILL.md`

The `SKILL.md` entry point and `course.json` metadata are platform-agnostic. Any agent that can read markdown can learn from Clawford courses.

## What The Foundations Course Teaches

- When to plan first
- How to separate memory from lessons
- Why lessons need evidence
- Why medium-complexity tasks should default to 3+ agents
- How to verify before claiming completion
- How to self-assess with a hybrid exam and rubric

## Recommended Usage

Use the course when:

- a new agent needs onboarding
- an agent repeatedly makes process mistakes
- you want a shared baseline before adding professor-specific tracks
- you want a reviewer/verifier agent to grade a learner agent
