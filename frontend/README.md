# 🎓 Eduble Frontend

Modern web application for the Eduble student performance tracking platform.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- MetaMask or compatible Web3 wallet

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Features

- **Parent Dashboard**: Real-time insights into student performance
- **Teacher Interface**: Easy grade entry and student management
- **Student Portal**: Self-monitoring and progress tracking
- **Web3 Integration**: Connect with MetaMask to access blockchain data
- **Responsive Design**: Works on desktop, tablet, and mobile

## 🏗️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: CSS (custom design system)
- **Web3**: ethers.js
- **State Management**: React Context API

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── parent/            # Parent dashboard
│   ├── teacher/           # Teacher interface
│   └── student/           # Student portal
├── components/            # Reusable components
├── lib/                   # Utilities and helpers
│   ├── contracts/         # Contract ABIs and addresses
│   └── web3/              # Web3 utilities
├── styles/                # Global styles
└── public/                # Static assets
```

## 🔗 Connecting to Smart Contracts

1. Make sure your local Hardhat node is running
2. Deploy the Eduble contract
3. Update the contract address in `lib/contracts/addresses.ts`
4. Connect your MetaMask wallet to localhost:8545

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address_here
NEXT_PUBLIC_CHAIN_ID=1337
```

## 🎯 Next Steps

- [ ] Install Web3 dependencies (ethers.js, wagmi, RainbowKit)
- [ ] Create Web3 provider and wallet connection
- [ ] Build parent dashboard UI
- [ ] Build teacher interface UI
- [ ] Build student portal UI
- [ ] Integrate with smart contracts
- [ ] Add authentication and role management
