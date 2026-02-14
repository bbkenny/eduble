"use client";

import { useState, useEffect } from "react";

interface StudentData {
  id: string;
  name: string;
  grades: {
    subject: string;
    score: number;
    date: string;
  }[];
  attendance: {
    total: number;
    present: number;
    absent: number;
    late: number;
  };
  behavior: {
    category: string;
    score: number;
  }[];
  gpa: number;
  lastUpdated: string;
}

export function useStudentData(studentId: string | null) {
  const [data, setData] = useState<StudentData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!studentId) {
      setData(null);
      return;
    }

    const fetchStudentData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const mockData: StudentData = {
          id: studentId,
          name: "Alex Johnson",
          grades: [
            { subject: "Math", score: 96, date: "2024-01-15" },
            { subject: "English", score: 88, date: "2024-01-14" },
            { subject: "Science", score: 94, date: "2024-01-13" },
          ],
          attendance: {
            total: 50,
            present: 45,
            absent: 3,
            late: 2,
          },
          behavior: [
            { category: "Participation", score: 92 },
            { category: "Conduct", score: 88 },
            { category: "Teamwork", score: 90 },
            { category: "Punctuality", score: 85 },
          ],
          gpa: 3.85,
          lastUpdated: new Date().toISOString(),
        };

        setData(mockData);
      } catch (err) {
        setError("Failed to fetch student data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudentData();
  }, [studentId]);

  const refetch = () => {
    if (studentId) {
      setIsLoading(true);
      setError(null);
    }
  };

  return { data, isLoading, error, refetch };
}