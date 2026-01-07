---
title: Bare Metal GPUs Features
description: Detailed features and specifications of our bare metal GPU servers
---

# Bare Metal GPUs Features

Our bare metal GPU servers are dedicated, single-tenant servers with 8 GPUs of various models that can operate standalone or in multi-node clusters. They provide raw compute power and consistent performance for AI/ML workloads, high-performance computing (HPC), and other GPU-intensive applications.

## Hardware Specifications

### RTX Pro 6000 Bare Metal Server

| Component | Description | Quantity |
|-----------|-------------|----------|
| **GPU Module** | NVIDIA RTX Pro 6000 Blackwell Server Edition | 8 |
| **CPU** | AMD EPYC 9475F | 2 |
| **CPU Cores/Threads** | 128 cores / 256 threads | - |
| **Memory** | 64GB DDR5 ECC (3200 MHz) | 24 |
| **Total Memory** | 1.5 TB DDR5 ECC | - |
| **Storage** | - System: NVMe SSD 1.92 TB<br>- Data: NVMe SSD 3.84 TB | -<br>- |
| **Storage Configuration** | - System: RAID 1<br>- Data: RAID 5 | -<br>- |
| **Network Card** | CX6 100G | 1 |
| **Power Supply** | Redundant 1600W | 2 |
| **Form Factor** | 4U Rackmount | 1 |

### NVIDIA H100 DGX Bare Metal Server

| Component | Description | Quantity |
|-----------|-------------|----------|
| **GPU Module** | NVIDIA H100 Tensor Core GPU (80 GB HBM3 per GPU) | 8 |
| **GPU Interconnect** | NVIDIA NVLink technology | - |
| **CPU** | Intel Xeon Scalable Processor (SPR) 8558 | 2 |
| **vCPUs** | 128 cores | - |
| **Memory** | 64GB DDR5 ECC (4800 MHz) | 32 |
| **Total Memory** | 2 TB DDR5 ECC | - |
| **Storage** | NVMe SSD | 10 TB |
| **Storage Configuration** | RAID 0/1 configurable | - |
| **Network Card** | - Mellanox ConnectX-7 (400 Gbps)<br>- InfiniBand: 100G (2 × 50 Gbps) | -<br>- |
| **Public Network** | 10 Gbps | - |
| **Form Factor** | 4U Rackmount | 1 |

### RTX 5090 Founders Edition Bare Metal Server

| Component | Description | Quantity |
|-----------|-------------|----------|
| **GPU Module** | NVIDIA RTX 5090 Founders Edition (32 GB GDDR7 per GPU) | 8 |
| **CPU** | Intel Xeon Platinum 8481C | 1 |
| **CPU Cores/Threads** | 56 cores / 112 threads | - |
| **Memory** | 64GB DDR5-4800 RDIMM ECC | 8 |
| **Total Memory** | 512 GB DDR5 ECC | - |
| **Storage** | - System: 1 TB M.2 Gen4 NVMe SSD<br>- Data: 7.68 TB U.2 Gen4 NVMe SSD (DWPD1) | -<br>- |
| **Form Factor** | 2U Rackmount | 1 |

## Networking

Our bare metal GPU servers come with the following network configurations:

| Network Type | Details |
|--------------|---------|
| **Public Network** | - Bandwidth: Shared<br>- IP Address: Shared (1:1 NAT available as add-on)<br>- Max Speed: Up to 10 Gbps (varies by configuration) |
| **Private Network** | - Bandwidth: Shared<br>- IP Address: Private IP assigned per server<br>- Layer 2 Isolation: Yes |
| **GPU Interconnect** | - RTX Pro 6000: PCIe 5.0<br>- H100: NVIDIA NVLink + InfiniBand<br>- RTX 5090: PCIe 5.0 |
| **Network Cards** | - RTX Pro 6000: CX6 100G<br>- H100: ConnectX-7 (400 Gbps) + InfiniBand 100G<br>- RTX 5090: 10Gbps Ethernet |

## Software Configuration

All our bare metal GPU servers come preconfigured with the following software options:

| Software | Details |
|----------|---------|
| **Operating System** | Ubuntu 22.04 LTS (other OS available upon request) |
| **Remote Access** | - SSH with preloaded keys<br>- IPMI for out-of-band management |
| **GPU Drivers** | - NVIDIA CUDA drivers (preinstalled)<br>- NVIDIA cuDNN (preinstalled)<br>- NVIDIA TensorRT (preinstalled)<br>- Support for custom driver versions (limited support) |
| **Container Support** | - Docker preinstalled<br>- NVIDIA Container Toolkit preinstalled<br>- Support for Kubernetes deployment |
| **Monitoring** | - Basic server monitoring<br>- GPU utilization metrics<br>- Temperature and power monitoring |

## Deployment Options

| Option | Details |
|--------|---------|
| **Standalone Server** | Single server deployment with 8 GPUs |
| **Multi-node Cluster** | Deploy multiple servers in a cluster with high-speed interconnect |
| **Custom Configuration** | Tailored hardware and software configuration available upon request |
| **Provisioning Time** | Typically 24-48 hours for standard configurations |

## Support and Maintenance

| Service | Details |
|---------|---------|
| **Technical Support** | 24/7 support via email and Discord |
| **Hardware Replacement** | 4-hour hardware replacement SLA (99.9% uptime guarantee) |
| **Software Updates** | Regular security patches and driver updates |
| **Maintenance Windows** | Scheduled maintenance with prior notification |
| **Documentation** | Comprehensive API and usage documentation |
| **Training** | Optional onboarding and training sessions |

## Use Cases

Our bare metal GPU servers are ideal for a wide range of GPU-intensive workloads:

### AI/ML and Deep Learning
- Large language model (LLM) training and fine-tuning
- Computer vision and image recognition
- Natural language processing (NLP)
- Generative AI applications
- Reinforcement learning

### High-Performance Computing (HPC)
- Scientific simulations
- Computational fluid dynamics (CFD)
- Molecular dynamics
- Weather forecasting

### Media and Entertainment
- 3D rendering and animation
- Video editing and post-production
- Visual effects (VFX)
- Gaming and virtual reality (VR) development

### Enterprise Applications
- Computer-aided design (CAD)
- Product lifecycle management (PLM)
- Financial modeling and risk analysis
- Real-time fraud detection

## Security

| Feature | Details |
|---------|---------|
| **Physical Security** | - 24/7 data center surveillance<br>- Biometric access controls<br>- Redundant power and cooling |
| **Network Security** | - DDoS protection<br>- Firewall configuration options<br>- Private network isolation |
| **Data Security** | - Encryption at rest (optional)<br>- Encryption in transit<br>- Secure data erasure on decommissioning |
| **Compliance** | - ISO 27001 certified data centers<br>- GDPR compliant<br>- SOC 2 Type II certified |

## Advantages of Bare Metal GPUs

| Advantage | Description |
|-----------|-------------|
| **No Virtualization Overhead** | Direct hardware access ensures maximum performance |
| **Consistent Performance** | No noisy neighbor effects from shared resources |
| **Customizable Configuration** | Tailor hardware and software to your specific needs |
| **High GPU-to-GPU Bandwidth** | Optimized for multi-GPU workloads |
| **Data Sovereignty** | Full control over your data and infrastructure |
| **Cost-Effective for Long-Term Use** | Lower total cost of ownership for steady workloads |

## Getting Started

1. **Choose Your Configuration**: Select the GPU model and lease term that best fits your needs
2. **Provision Your Server**: Your server will be provisioned within 24-48 hours
3. **Access Your Server**: Connect via SSH using the provided credentials
4. **Install Your Workloads**: Deploy your AI/ML models or applications
5. **Scale as Needed**: Add more servers or upgrade your configuration as your needs grow

For more information about our bare metal GPU servers, please refer to our [pricing page](pricing) or [contact our sales team](pricing#contact-sales).