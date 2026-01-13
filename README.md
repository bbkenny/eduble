# 🎓 Eduble

**Making student performance data digestible for modern parents.**

Get bite-sized insights into grades, attendance, and progress—no open days required.

---

## 🎯 Overview

Eduble is a comprehensive student performance tracking platform designed for Gen Z parents who want real-time insights into their child's academic progress without attending traditional open days. The platform connects schools, teachers, parents, and students in one seamless ecosystem.

## ✨ Key Features

### For Parents 👨‍👩‍👧‍👦
- 📊 **Real-time Dashboard** - Visual performance metrics at a glance
- 📈 **Grade Tracking** - Monitor progress across all subjects
- 📅 **Attendance Monitoring** - Stay informed about attendance patterns
- 🎯 **Behavior Reports** - Get insights into classroom behavior
- 📝 **Assignment Status** - Track homework and project completion
- 📉 **Progress Analytics** - Identify trends and areas for improvement
- 🔔 **Smart Notifications** - Receive important updates instantly

### For Teachers/Schools 🏫
- ✍️ **Easy Grade Entry** - Streamlined grading interface
- ✅ **Attendance Tracking** - Quick and efficient attendance management
- 📋 **Behavior Logging** - Document and track student behavior
- 📚 **Assignment Management** - Create and track assignments
- 💬 **Parent Communication** - Direct messaging with parents
- 📊 **Class Analytics** - Understand class-wide performance trends

### For Students 📚
- 👀 **Self-Monitoring** - View their own progress and grades
- 🎯 **Goal Tracking** - Set and track academic goals
- 📅 **Assignment Calendar** - Never miss a deadline

## 🏗️ Project Structure

```
eduble/
├── frontend/          # Next.js web application with Web3 integration
├── smartcontract/     # Solidity smart contracts (Hardhat)
├── docs/              # Documentation and guides
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MetaMask or compatible Web3 wallet
- Hardhat for smart contract development

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd eduble

# Install frontend dependencies
cd frontend
npm install

# Install smart contract dependencies
cd ../smartcontract
npm install
```

### Development

```bash
# Compile smart contracts (from smartcontract directory)
npx hardhat compile

# Run local blockchain node
npx hardhat node

# Deploy contracts to local network
npx hardhat run scripts/deploy.ts --network localhost

# Run frontend (from frontend directory)
npm run dev
```

## 🎨 Tech Stack

### Frontend
- **Framework**: Next.js 16+ (React)
- **Styling**: CSS (modern, responsive design)
- **State Management**: React Context/Hooks
- **Charts**: Chart.js or Recharts
- **Web3 Integration**: ethers.js or wagmi
- **Wallet Connection**: RainbowKit or Web3Modal

### Blockchain Backend
- **Smart Contracts**: Solidity
- **Development Framework**: Hardhat
- **Testing**: Hardhat + Chai
- **Network**: Ethereum-compatible (Base, Polygon, or Ethereum)
- **Storage**: On-chain + IPFS for large data

## 🎯 Roadmap

- [ ] Project scaffolding
- [ ] Database schema design
- [ ] Authentication system
- [ ] Parent dashboard
- [ ] Teacher interface
- [ ] Student portal
- [ ] Notification system
- [ ] Mobile responsiveness
- [ ] Analytics and reporting
- [ ] Mobile app (future)

## 📝 License

TBD

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

---

**Eduble** - Education Made Digestible 🎓✨
