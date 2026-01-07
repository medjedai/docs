---
title: Bare Metal GPUs
description: An overview of bare metal GPUs, their advantages, and use cases compared to cloud GPUs
---

# What are Bare Metal GPUs?

A bare metal GPU is a dedicated graphics processing unit that provides direct access to underlying hardware resources without virtualization or abstraction layers. Unlike shared cloud GPU instances, bare metal GPUs give users complete control over hardware configuration, CUDA drivers, and memory management.

## Bare Metal vs Cloud GPUs

| Aspect | Bare Metal GPUs | Cloud GPUs |
|--------|----------------|------------|
| **Hardware Access** | Direct, no virtualization | Virtualized through hypervisor |
| **Performance** | Consistent, no overhead | Variable due to virtualization and noisy neighbors |
| **Control** | Full control over hardware, drivers, and memory | Limited control, managed by cloud provider |
| **Scalability** | Fixed resources, requires manual scaling | Elastic, quick to deploy/terminate |
| **Cost Model** | Upfront investment, lower long-term cost for steady workloads | Pay-as-you-go, higher long-term cost for continuous use |

## Key Benefits

- **Eliminated Virtualization Overhead**: Direct hardware access ensures maximum performance for GPU-intensive workloads
- **Consistent Performance**: No noisy neighbor effects from shared resources
- **Precise Optimization**: Ability to customize CUDA configurations, kernel development, and system parameters
- **Data Sovereignty**: Ideal for organizations with strict compliance requirements needing direct hardware control

## Ideal Use Cases

- Large-scale model training requiring minimal latency between GPUs
- High-throughput inference serving with strict latency requirements
- Workloads requiring specialized CUDA optimizations or custom GPU kernels
- Applications with consistent, high-demand AI/ML workloads
- Industries with strict data compliance needs (e.g., financial fraud detection)

## Configuration Options

- **Dedicated Bare Metal**: Full root access and hardware control for custom implementations
- **Managed Bare Metal**: System administration offloaded while maintaining dedicated hardware access, typically using containerization for workload isolation

Bare metal GPUs offer raw compute power and consistent performance, making them a preferred choice for enterprises with demanding AI workloads or strict data requirements, while cloud GPUs remain valuable for flexible, scalable development environments.