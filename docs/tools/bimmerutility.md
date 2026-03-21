---
id: bimmerutility
title: BimmerUtility
sidebar_position: 2
---

# BimmerUtility

BimmerUtility is a coding and diagnostics application for BMW vehicles, available on Windows PC. It provides a user-friendly interface for reading module data, coding features, and running basic diagnostics.

## What You Need

- **Windows PC** (Windows 10 or later)
- **ENET cable** — an Ethernet-to-OBD2 cable for direct connection to the vehicle
- **BimmerUtility software** — download from the official BimmerUtility website

## Supported Vehicles

BimmerUtility supports F and G series BMWs:
- **G series:** G20, G30, G05, G06, G07, G80, G82, and more
- **F series:** F30, F10, F15, F25, and others
- Support for newer iDrive 8+ models is being expanded

## Key Features

### Coding
- Browse and modify FDL parameters with a structured interface
- Toggle features on/off with clear descriptions
- Supports BDC, HU_MGU, KOMBI, and other common modules

### Diagnostics
- Read and clear fault codes (DTCs) across all modules
- View live sensor data
- Check module status and software versions

### Backup & Restore
- Read and save module coding (CAFD) before making changes
- Restore previous coding if needed

## How to Use

### 1. Connect
Plug the ENET cable into the OBD2 port (driver's side footwell) and connect the other end to your PC's Ethernet port. Configure your network adapter to the link-local IP range (e.g., `169.254.x.x`, subnet `255.255.0.0`). Launch BimmerUtility.

### 2. Identify Vehicle
The software reads your VIN and identifies compatible modules.

### 3. Select a Module
Choose the module you want to code (e.g., BDC, KOMBI, HU_MGU).

### 4. Read Coding
The software reads the current coding data — this also serves as your backup.

### 5. Make Changes
Browse available parameters and make your changes. The software shows parameter names and valid values.

### 6. Write Coding
Apply the changes. The module restarts briefly.

## Pros & Cons

| Pros | Cons |
|------|------|
| Clean, structured interface | Windows only |
| FDL-level access (more than BimmerCode standard mode) | Requires ENET cable |
| Diagnostics + coding in one application | Smaller community than BimmerCode |
| Fault code reading and clearing | Some modules may have limited support |
| Regular updates for new models | |

## BimmerUtility vs. BimmerCode vs. E-Sys

| Feature | BimmerUtility | BimmerCode | E-Sys |
|---------|--------------|------------|-------|
| Platform | Windows | iOS + Android | Windows |
| Adapter | ENET cable | Bluetooth LE | ENET cable |
| Coding depth | FDL-level access | Curated + Expert Mode | Full FDL access |
| Diagnostics | Full DTC read/clear | Limited | Full |
| Live data | Yes | No | Yes |
| Ease of use | Moderate | Easy | Advanced |
| Price model | One-time purchase | One-time + subscription for Expert | Free (community) |

## Tips

- BimmerUtility and BimmerCode use the same underlying FDL data — changes made in one are visible in the other
- The diagnostics feature is useful for checking fault codes before and after coding
- BimmerUtility sits between BimmerCode (easy, mobile) and E-Sys (full power, steep learning curve) in terms of complexity and capability
- Always read the module before coding to create a backup
