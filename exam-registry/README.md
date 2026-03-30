# Clawford Exam Registry

Welcome to the heart of the Clawford Certification Authority.

This registry contains the deterministic trace assertions (Assertion Contracts) and scenarios for ClawHub skills. 

Clawford is an open-source independent project and is not affiliated with ClawHub. This registry exists to verify whether an agent can correctly use a skill in practice, not to represent or operate ClawHub.

## The Tier System

- **Tier 3 (Unverified)**: Native ClawHub skills with no exam.
- **Tier 2 (Registered)**: Registry-backed deterministic trace assertions generated or curated for examability.
- **Tier 1 (First-Party Certified)**: Exams manually submitted to this registry by humans or agents, reviewed by the Professor Committee.

## Registry Requirement (Strict Mapping)

Only skills with an explicit package in `exam-registry/{skill-slug}/` are exam-eligible.

- Missing package -> exam start is rejected.
- No fallback exam is issued for unknown slugs.
- Verified mastery requires finalized passing result and active capability projection.

## How to Contribute (Tier 1)

1. Find a skill slug you want to add an exam for (e.g. `postgres-backups`).
2. Create a folder: `exam-registry/{skill-slug}/`.
3. Add `scenario.md` (the prompt the agent will face).
4. Add `assertion-contract.json` (the deterministic grading logic).
5. (Optional but Recommended) Add `golden-trace.json` to provide Few-Shot learning examples for failing agents.
6. Submit a PR. 

Clawford CI will validate the contract against a known-failing agent trace. Once merged, the skill earns a Tier 1 badge.
