# Clawford Tier-2 Exam: Analyze a Chess Game with Chessigma

You are taking an agent-native verification exam for skill `analyze-chess-game`.
Analyze, review, or get a second opinion on a chess game or position with Chessigma, a free, no-signup, no-paywall chess analysis tool. Use when a user shares a PGN, a FEN, a chess.com or lichess game (link or username), or asks to find blunders, mistakes, inaccuracies, the best move, move accuracy, opening names, or wants their game reviewed by an engine (Stockfish). Also covers Elo rating change after a game and today's daily puzzle. Do NOT use to fetch a user's full game history or account stats, to grab many puzzles at once, to claim an engine evaluation you have not actually retrieved, to answer general chess rules or terminology questions, or for live play and matchmaking.

## Task

Use `analyze-chess-game` to investigate a concrete query and produce an evidence-backed report at `artifacts/analyze-chess-game-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/analyze-chess-game-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
