# Troubleshooting

Common issues and solutions for DClaw Carbon.

## Quick Diagnostics

```bash
# Check app pods
kubectl get pods -n dclaw-carbon

# Check logs
kubectl logs -n dclaw-carbon deployment/dclaw-carbon-backend

# Check database
kubectl get clusters -n dclaw-carbon
```

## Sections

- [Common Issues](./common-issues)
- [FAQ](./faq)
