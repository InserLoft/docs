---
title: CLI
description: The Inserloft command-line tool.
section: Developer
order: 2
---

The Inserloft CLI lets you manage Projects, models, and deployments from the terminal.

```bash
npm install -g @inserloft/cli
inserloft login
```

Common commands:

```bash
inserloft projects list
inserloft models push ./my-model --project my-org/my-project
inserloft deploy my-org/my-project --version 1.2.0
```

The CLI is a thin wrapper around the same [APIs](/docs/apis/authentication) and Pixel [Platform](/docs/platform/pixel) primitives available through the web interface, so anything scripted with the CLI is reproducible manually on Pixel and vice versa.
