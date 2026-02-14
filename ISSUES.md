# Eduble Project Issues & Tasks

This document outlines all the development tasks needed to build **Eduble**, a student performance tracking platform designed for Gen Z parents.

---

## 🏗️ Workflow Overviews

### 1. Academic Performance Lifecycle

1. **School Onboarding**: School admin registers the school on-chain and assigns teacher roles.
2. **Student Enrollment**: Teachers or admins enroll students (on-chain IDs) and link them to parental addresses.
3. **Data Entry**: Teachers log grades, attendance, and behavior reports.
4. **Data Digestion**: Smart contracts or subgraphs aggregate data into bite-sized performance metrics.
5. **Parental Insight**: Parents view real-time visual dashboards and receive on-chain/push notifications.

### 2. Access Control Lifecycle

1. **Admin Role**: Full control over school registration and role assignment.
2. **Teacher Role**: Ability to input data for assigned classes/students.
3. **Parent Role**: Read-only access to their specific child's data.
4. **Student Role**: Read-only access to their own performance data.

---

## 🛠️ Smart Contract Issues (Solidity)

### Phase 1: Infrastructure & RBAC

- [ ] **Issue #1**: Hardhat Project Initialization
  - [ ] Configure `hardhat.config.ts` for Base Sepolia/Mainnet.
  - [ ] Implement `.env` management and provider setup.
  - [ ] Setup `scripts/deploy.ts` with Hardhat Ignition.
- [ ] **Issue #2**: Role-Based Access Control (RBAC)
  - [ ] Implement OpenZeppelin `AccessControl`.
  - [ ] Define roles: `ADMIN_ROLE`, `TEACHER_ROLE`, `PARENT_ROLE`.
  - [ ] Implement `grantRole` and `revokeRole` with proper event emission.

### Phase 2: Core Academic Logic

- [ ] **Issue #3**: School & Student Registry
  - [ ] Define `Student` struct: `id`, `name`, `parentAddress`, `active`.
  - [ ] Implement `registerStudent` function (Admin only).
  - [ ] Implement `linkParent` function to map student IDs to parent addresses.
- [ ] **Issue #4**: Grade & Attendance Logging
  - [ ] Define `Record` struct: `studentId`, `subject`, `score`, `timestamp`, `teacher`.
  - [ ] Implement `logGrade` function with range validation (0-100).
  - [ ] Implement `logAttendance` (Present/Absent/Late).
  - [ ] Emit `DataLogged` event for real-time frontend updates.
- [ ] **Issue #5**: Behavior & Progress Reporting
  - [ ] Implement `logBehavior` with predefined categories (e.g., Participation, Conduct).
  - [ ] Add `metadataURI` (IPFS) for detailed teacher comments.

### Phase 3: Data Aggregation & Security

- [x] **Issue #6**: Aggregate View Functions
  - ✅ Implemented `calculateAverageGrade` read-only function.
  - ✅ Implemented `getAttendancePercentage` helper.
- [x] **Issue #7**: Security & Circuit Breakers
  - ✅ Integrated `Pausable` for emergency maintenance.
  - ✅ Implemented `ReentrancyGuard` for state-modifying functions.
- [ ] **Issue #8**: Gas Optimization
  - [ ] Review storage patterns for records to minimize gas costs on Base.
  - [ ] Implement bit-packing where applicable for student IDs and scores.

---

## 💻 Frontend Issues (Next.js)

### Phase 4: Architecture & UI Foundation

- [x] **Issue #9**: App Router & Branding Setup
  - ✅ Configured Tailwind CSS 4 with "Digestible" palette (Mint Green: `#98FF98`, Soft Slate: `#334155`).
  - ✅ Implemented layout with theme-consistent design.
- [ ] **Issue #10**: Web3 & Role-Based Routing
  - [ ] Setup `Wagmi` and `RainbowKit`.
  - [ ] Implement `ProtectedRoute` component that checks on-chain roles before rendering dashboards.
  - [ ] Create `AuthWatcher` hook for session management.

### Phase 5: Role-Specific Dashboards

- [x] **Issue #11**: Parent Dashboard UI
  - ✅ Built `PerformanceSummary` cards with bite-sized grade metrics.
  - ✅ Integrated `Recharts` for grade trends and attendance donut charts.
  - ✅ Implemented notification section for recent academic updates.
- [ ] **Issue #12**: Teacher Input Interface
  - [ ] Build `GradeEntryForm` with batch upload capability (CSV).
  - [ ] Implement `StudentPicker` with search and filtering.
  - [ ] Build `BehaviorLogger` with emoji-based quick selection.
- [ ] **Issue #13**: Student Progress Portal
  - [ ] Design "Self-Improvement" gamified dashboard.
  - [ ] Build `GoalTracker` for setting target grades.

### Phase 6: Integration & Polish

- [ ] **Issue #14**: Real-time Data Sync
  - [ ] Implement `useStudentData` hook fetching from the smart contract.
  - [ ] Add `SkeletonLoaders` for charts and lists.
- [ ] **Issue #15**: Mobile Experience & Notifications
  - [ ] Ensure 100% responsiveness for on-the-go parent checking.
  - [ ] Add PWA support for mobile "App-like" feel.

---

## 🧪 Testing & Quality Assurance

- [ ] **Issue #16**: Solidity Unit Tests
  - [ ] Test role transitions (Admin -> Teacher).
  - [ ] Test data integrity (Parent cannot view other student's grades).
- [ ] **Issue #17**: Frontend Integration Testing
  - [ ] Mock Wagmi hooks for UI component testing.
  - [ ] Test form validation for grade entries.

---

## 📊 Priority Levels

- **P0 (Critical)**: Issues #1, #2, #4, #10, #11
- **P1 (High)**: Issues #3, #6, #12, #14
- **P2 (Medium)**: Issues #5, #7, #13, #15
- **P3 (Low)**: Issues #8, #9, #16, #17

---

**Authored by: bbkenny <jouleself@gmail.com>**
