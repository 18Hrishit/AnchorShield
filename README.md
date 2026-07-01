# Project AnchorShield 

### Context-Aware Alphanumeric OTP Protocol with Globally Reserved Indicators
**Submitted for:** Bank of Baroda Hackathon 2026 (Cybersecurity & Fraud Domain)  
**Target Vector:** Account Takeover (ATO) Prevention via Social Engineering

---

## The Core Innovation
AnchorShield introduces a behavioral and visual **"Stop Sign"** for high-risk financial transactions. 

Instead of standard, context-blind 6-digit numeric OTPs that look identical for logging in or transferring ₹50,000, AnchorShield routes transactions based on user-configured safety thresholds. Crossing this limit dynamically triggers a **7-character alphanumeric OTP starting strictly with the `@` symbol** (e.g., `@K9P2W1`). 

### Key Protections Enforced:
1. **Infrastructure Isolation:** The `@` symbol is globally blocked at the telecom DLT operator gateway for all non-banking communication headers. If a citizen sees it, it is guaranteed to be a real financial authorization.
2. **Forced Human Intent:** The customer-facing application interface explicitly disables "Auto-read/Auto-fill SMS" hooks whenever an arriving token begins with `@`, breaking the user's automated script mindset and forcing manual validation.

---

## Simulation Logic Architecture
The engine evaluates transaction risk profiles instantly:
* **Amount < User Vault Limit:** Regular transaction path -> Generates standard numeric OTP -> Seamless UX.
* **Amount >= User Vault Limit:** High-risk transaction path -> Generates secure `@`-anchored token -> Elevates friction to protect assets.
