---
title: Authentication
description: How to authenticate requests to Inserloft's APIs.
section: APIs
order: 1
---

All Inserloft APIs are authenticated using an API key.

```bash
curl https://api.inserloft.dev/v1/chat \
  -H "Authorization: Bearer $INSERLOFT_API_KEY" \
  -H "Content-Type: application/json"
```

API keys are created and managed from an Organization's settings on [Pixel](/docs/platform/pixel). Keys are scoped to an Organization, so usage and billing are always attributed correctly.

Keep in mind:

- Never expose an API key in client-side code — call Inserloft's APIs from a server you control.
- Keys can be rotated at any time from Pixel without downtime, by issuing a new key before revoking the old one.
- Rate limits are applied per key — see [Rate Limits](/docs/apis/rate-limits) for details.
