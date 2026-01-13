# Eduble Smart Contracts

This directory contains the Solidity smart contracts for the Eduble student performance tracking platform.

## 📋 Contracts

### Eduble.sol
Main contract that manages:
- **Student Registration**: Register students with their wallet addresses and parent addresses
- **Grade Management**: Teachers can record grades for students across different subjects
- **Attendance Tracking**: Record daily attendance with remarks
- **Behavior Reports**: Document student behavior (positive, neutral, or concerns)
- **Role-Based Access**: Admin, Teacher, Parent, and Student roles with appropriate permissions

## 🔑 Key Features

- **Role-Based Access Control**: Using OpenZeppelin's AccessControl
  - `ADMIN_ROLE`: Can register students, add parents, and manage roles
  - `TEACHER_ROLE`: Can record grades, attendance, and behavior reports
  - `PARENT_ROLE`: Can view their child's data
  - `STUDENT_ROLE`: Can view their own data

- **Multi-Parent Support**: Students can have multiple parent addresses

- **Immutable Records**: All grades, attendance, and behavior reports are stored on-chain

- **Privacy Controls**: Parents can only view data for their own children

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Compile Contracts
```bash
npx hardhat compile
```

### Run Tests
```bash
npx hardhat test
```

### Deploy to Local Network
```bash
# Terminal 1: Start local node
npx hardhat node

# Terminal 2: Deploy contracts
npx hardhat run scripts/deploy.ts --network localhost
```

### Deploy to Testnet
```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

## 📝 Usage Examples

### Register a Student
```solidity
eduble.registerStudent(
    "John Doe",
    studentAddress,
    parentAddress
);
```

### Record a Grade
```solidity
eduble.recordGrade(
    studentId,
    "Mathematics",
    85,
    100,
    "Fall 2024"
);
```

### View Student Grades (as parent)
```solidity
Grade[] memory grades = eduble.getStudentGrades(studentId);
```

## 🔒 Security Considerations

- All sensitive functions are protected by role-based access control
- Parents can only access their own children's data
- Students are identified by unique IDs, not just addresses
- All records are immutable once created

## 📊 Gas Optimization

- Uses efficient data structures
- Minimizes storage operations
- Optimized compiler settings enabled

## 🧪 Testing

Tests cover:
- Student registration
- Grade recording and retrieval
- Attendance tracking
- Behavior reporting
- Access control enforcement
- Multi-parent scenarios

Run tests with:
```bash
npx hardhat test
```

For gas reports:
```bash
REPORT_GAS=true npx hardhat test
```
