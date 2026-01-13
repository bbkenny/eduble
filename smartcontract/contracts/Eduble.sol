// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title Eduble - Student Performance Tracking System
 * @notice Main contract for managing student records, grades, and performance data
 * @dev Uses role-based access control for teachers, parents, and administrators
 */
contract Eduble is AccessControl {
    // Roles
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant TEACHER_ROLE = keccak256("TEACHER_ROLE");
    bytes32 public constant PARENT_ROLE = keccak256("PARENT_ROLE");
    bytes32 public constant STUDENT_ROLE = keccak256("STUDENT_ROLE");

    // Structs
    struct Student {
        uint256 studentId;
        string name;
        address studentAddress;
        address parentAddress;
        bool isActive;
        uint256 enrollmentDate;
    }

    struct Grade {
        uint256 gradeId;
        uint256 studentId;
        string subject;
        uint256 score;
        uint256 maxScore;
        string term;
        uint256 timestamp;
        address recordedBy;
    }

    struct Attendance {
        uint256 studentId;
        uint256 date;
        bool present;
        string remarks;
        address recordedBy;
    }

    struct BehaviorReport {
        uint256 reportId;
        uint256 studentId;
        string description;
        string severity; // "positive", "neutral", "concern"
        uint256 timestamp;
        address reportedBy;
    }

    // State variables
    uint256 private studentCounter;
    uint256 private gradeCounter;
    uint256 private reportCounter;

    mapping(uint256 => Student) public students;
    mapping(address => uint256) public addressToStudentId;
    mapping(uint256 => Grade[]) public studentGrades;
    mapping(uint256 => Attendance[]) public studentAttendance;
    mapping(uint256 => BehaviorReport[]) public studentBehaviorReports;
    mapping(uint256 => address[]) public studentParents; // Support multiple parents

    // Events
    event StudentRegistered(uint256 indexed studentId, string name, address studentAddress, address parentAddress);
    event GradeRecorded(uint256 indexed gradeId, uint256 indexed studentId, string subject, uint256 score);
    event AttendanceRecorded(uint256 indexed studentId, uint256 date, bool present);
    event BehaviorReported(uint256 indexed reportId, uint256 indexed studentId, string severity);
    event ParentAdded(uint256 indexed studentId, address parentAddress);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    // Modifiers
    modifier onlyTeacherOrAdmin() {
        require(
            hasRole(TEACHER_ROLE, msg.sender) || hasRole(ADMIN_ROLE, msg.sender),
            "Caller is not a teacher or admin"
        );
        _;
    }

    modifier onlyParentOf(uint256 _studentId) {
        bool isParent = false;
        address[] memory parents = studentParents[_studentId];
        for (uint256 i = 0; i < parents.length; i++) {
            if (parents[i] == msg.sender) {
                isParent = true;
                break;
            }
        }
        require(isParent || hasRole(ADMIN_ROLE, msg.sender), "Not authorized to view this student");
        _;
    }

    // Student Management
    function registerStudent(
        string memory _name,
        address _studentAddress,
        address _parentAddress
    ) external onlyRole(ADMIN_ROLE) returns (uint256) {
        studentCounter++;
        uint256 studentId = studentCounter;

        students[studentId] = Student({
            studentId: studentId,
            name: _name,
            studentAddress: _studentAddress,
            parentAddress: _parentAddress,
            isActive: true,
            enrollmentDate: block.timestamp
        });

        addressToStudentId[_studentAddress] = studentId;
        studentParents[studentId].push(_parentAddress);

        // Grant roles
        _grantRole(STUDENT_ROLE, _studentAddress);
        _grantRole(PARENT_ROLE, _parentAddress);

        emit StudentRegistered(studentId, _name, _studentAddress, _parentAddress);
        return studentId;
    }

    function addParent(uint256 _studentId, address _parentAddress) external onlyRole(ADMIN_ROLE) {
        require(students[_studentId].isActive, "Student not found");
        studentParents[_studentId].push(_parentAddress);
        _grantRole(PARENT_ROLE, _parentAddress);
        emit ParentAdded(_studentId, _parentAddress);
    }

    // Grade Management
    function recordGrade(
        uint256 _studentId,
        string memory _subject,
        uint256 _score,
        uint256 _maxScore,
        string memory _term
    ) external onlyTeacherOrAdmin returns (uint256) {
        require(students[_studentId].isActive, "Student not found");
        require(_score <= _maxScore, "Score cannot exceed max score");

        gradeCounter++;
        Grade memory newGrade = Grade({
            gradeId: gradeCounter,
            studentId: _studentId,
            subject: _subject,
            score: _score,
            maxScore: _maxScore,
            term: _term,
            timestamp: block.timestamp,
            recordedBy: msg.sender
        });

        studentGrades[_studentId].push(newGrade);
        emit GradeRecorded(gradeCounter, _studentId, _subject, _score);
        return gradeCounter;
    }

    // Attendance Management
    function recordAttendance(
        uint256 _studentId,
        uint256 _date,
        bool _present,
        string memory _remarks
    ) external onlyTeacherOrAdmin {
        require(students[_studentId].isActive, "Student not found");

        Attendance memory newAttendance = Attendance({
            studentId: _studentId,
            date: _date,
            present: _present,
            remarks: _remarks,
            recordedBy: msg.sender
        });

        studentAttendance[_studentId].push(newAttendance);
        emit AttendanceRecorded(_studentId, _date, _present);
    }

    // Behavior Management
    function recordBehavior(
        uint256 _studentId,
        string memory _description,
        string memory _severity
    ) external onlyTeacherOrAdmin returns (uint256) {
        require(students[_studentId].isActive, "Student not found");

        reportCounter++;
        BehaviorReport memory newReport = BehaviorReport({
            reportId: reportCounter,
            studentId: _studentId,
            description: _description,
            severity: _severity,
            timestamp: block.timestamp,
            reportedBy: msg.sender
        });

        studentBehaviorReports[_studentId].push(newReport);
        emit BehaviorReported(reportCounter, _studentId, _severity);
        return reportCounter;
    }

    // View Functions
    function getStudent(uint256 _studentId) external view returns (Student memory) {
        return students[_studentId];
    }

    function getStudentGrades(uint256 _studentId) external view onlyParentOf(_studentId) returns (Grade[] memory) {
        return studentGrades[_studentId];
    }

    function getStudentAttendance(uint256 _studentId) external view onlyParentOf(_studentId) returns (Attendance[] memory) {
        return studentAttendance[_studentId];
    }

    function getStudentBehaviorReports(uint256 _studentId) external view onlyParentOf(_studentId) returns (BehaviorReport[] memory) {
        return studentBehaviorReports[_studentId];
    }

    function getStudentParents(uint256 _studentId) external view returns (address[] memory) {
        return studentParents[_studentId];
    }

    // Calculate average grade for a student
    function calculateAverageGrade(uint256 _studentId) external view returns (uint256) {
        Grade[] memory grades = studentGrades[_studentId];
        if (grades.length == 0) return 0;

        uint256 totalPercentage = 0;
        for (uint256 i = 0; i < grades.length; i++) {
            totalPercentage += (grades[i].score * 100) / grades[i].maxScore;
        }
        return totalPercentage / grades.length;
    }
}
