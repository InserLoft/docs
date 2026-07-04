---
title: Error Codes
description: HTTP and API error codes returned by Inserloft's APIs.
section: Reference
order: 2
---

| Code | Meaning |
| --- | --- |
| `400` | Invalid request — check required fields for the endpoint you called |
| `401` | Missing or invalid API key — see [Authentication](/docs/apis/authentication) |
| `403` | The key is valid but lacks access to the requested resource |
| `404` | The model, file, or resource does not exist |
| `429` | Rate limit exceeded — see [Rate Limits](/docs/apis/rate-limits) |
| `500` | Unexpected server error — safe to retry with backoff |

Error responses include a JSON body with a `message` field describing the specific problem in more detail.
