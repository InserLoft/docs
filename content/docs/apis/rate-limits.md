---
title: Rate Limits
description: How request limits are applied across the APIs.
section: APIs
order: 7
---

Rate limits are applied per API key and vary by endpoint and model.

Every response includes headers describing your current limit status:

```
x-ratelimit-limit-requests: 500
x-ratelimit-remaining-requests: 493
x-ratelimit-reset-requests: 42s
```

If you exceed your limit, the API returns an HTTP `429` status. Guidelines for handling this:

- Use exponential backoff before retrying.
- Prefer smaller, efficient models like [Verty](/docs/models/verty) for high-volume workloads such as embeddings.
- Contact your Organization admin on [Pixel](/docs/platform/pixel) to request a limit increase for production workloads.
