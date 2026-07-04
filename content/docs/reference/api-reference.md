---
title: API Reference
description: Endpoint-level reference for Inserloft's APIs.
section: Reference
order: 1
---

A quick index of every API endpoint documented in this site:

| Endpoint | Description |
| --- | --- |
| `POST /v1/responses` | [Responses API](/docs/apis/responses-api) — general-purpose model output |
| `POST /v1/chat` | [Chat API](/docs/apis/chat-api) — multi-turn conversation |
| `GET /v1/models` | [Models API](/docs/apis/models-api) — list available models |
| `GET /v1/models/{id}` | [Models API](/docs/apis/models-api) — inspect a specific model |
| `POST /v1/embeddings` | [Embeddings API](/docs/apis/embeddings-api) — generate vector embeddings |
| `POST /v1/files` | [Files API](/docs/apis/files-api) — upload a file |

All endpoints require the `Authorization` header described in [Authentication](/docs/apis/authentication).
