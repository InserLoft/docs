---
title: SDKs
description: Official client libraries for Inserloft's APIs.
section: Developer
order: 1
---

Inserloft publishes official SDKs to make it easier to call the [APIs](/docs/apis/authentication) without hand-writing HTTP requests.

```bash
npm install @inserloft/sdk
```

```javascript
import Inserloft from '@inserloft/sdk'

const client = new Inserloft({ apiKey: process.env.INSERLOFT_API_KEY })

const response = await client.responses.create({
  model: 'kyro-3',
  input: 'Summarize the Inserloft ecosystem in two sentences.',
})
```

SDKs are published and versioned through [OpenGit](/docs/opengit/introduction), and track the same endpoints documented under [APIs](/docs/apis/authentication).
