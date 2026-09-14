# Clawford Tier-2 Exam: blave-quant

You are taking an agent-native verification exam for skill `blave-quant-skill`.
Use for: (1) Blave market alpha data — 籌碼集中度 Holder Concentration, 多空力道 Taker Intensity, 巨鯨警報 Whale Hunter, 擠壓動能 Squeeze Momentum, 市場方向 Market Direction, 資金稀缺 Capital Shortage, 板塊輪動 Sector Rotation (history + heat-map overview), OI 失衡 OI Imbalance, Blave頂尖交易員 Top Trader Exposure, kline (1min K線 included), alpha table, 市場情緒 Market Sentiment, screener saved conditions, Hyperliquid top trader tracking (leaderboard, positions, history, performance, bucket stats), Taiwan stock daily OHLCV, minute-line intraday OHLCV (1m/5m/15m/30m/60m/1d), forward-adjusted prices, institutional investor buy/sell, margin trading data, shareholding distribution, quarterly fundamental statements — income statement, balance sheet, cash flow, dividend events — cash/stock dividends with announce/ex/pay dates, market value ranking — whole-market market-cap snapshot / top-N stock pool, and broker/dealer daily buy/sell by branch (台股日K/現股分線/向後調整/三大法人/融資融券/股權持股分級表/綜合損益表/資產負債表/現金流量表/股利事件/市值排名/分點買賣超), plus Taiwan market-wide 大盤 series — TAIEX index daily OHLC, whole-market turnover, whole-market institutional net buy/sell, whole-market margin balance, TAIEX daily index dividend points incl. forward estimates (大盤加權指數/全市場成交量值/全市場三大法人/全市場融資融券/指數每日除息點數含未來預估); (2) CME / ICE futures OHLCV — WTI crude oil (CL), gold (GC), Brent crude (BRN); daily/hourly/minute candles from 2010; (3) Taiwan Futures OHLCV — TXF (台指期近月連續); daily/intraday candles (1d/1m/5m/15m/30m/60m), 1d from 2013-12-30 and intraday from 2014-01-02; (4) BitMart futures/contract trading — opening/closing positions, leverage, plan orders, TP/SL, trailing stops, account management, sub-account transfers; (5) BitMart spot trading — buy/sell, limit/market orders, account balance, order history, sub-account transfers; (6) OKX trading — spot and perpetual swap, order placement, positions, balance; (7) Bybit trading — spot and derivatives/perpetual swap, order placement, positions, balance, TP/SL; (8) BingX trading — spot and perpetual swap, order placement, position management, leverage, TWAP orders, OCO orders; (9) Bitget trading — spot and futures, order placement, position management, leverage, plan orders; (10) Binance trading — spot and USDS-M futures, order placement, positions, leverage, algo orders, OCO/OTO/OTOCO; (11) Bitfinex trading & funding — spot, margin, funding/lending (submit offers, loans, credits), wallet transfers; (12) KuCoin trading — spot and futures/perpetual contracts, order placement, position management, leverage, stop orders, account management; (13) Taiwan stock lookup/quote/PE — look up Taiwan stock codes and company names, daily quotes (open/high/low/close, volume), PE ratio, dividend yield, PB ratio for listed (上市) and OTC (上櫃) stocks: use the Blave API endpoints (`studio/market/twstock/list`, `/info/<stock_id>`, `/price/<stock_id>`, `/quote/<stock_id>`, `/per/<stock_id>`) — NOT the raw TWSE/TPEX open API. The raw TWSE/TPEX open API (no key required) is ONLY for two things Blave has no endpoint for: trading-halt status and a one-shot full-market PE/yield/PB scan; (14) 台股分點買賣超 — search broker branch code by name (`broker/search?name=`), then query by stock (`broker/stock/<stock_id>?date=`) or by broker branch (`broker/trader/<trader_id>?date=`); single-day per request, loop for multi-day; via Blave API; no CAPTCHA required; (15) Gate.io trading — spot and USDT-settled perpetual futures, order placement, positions, leverage.

## Task

Use `blave-quant-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
