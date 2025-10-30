'use client';
import React, { useState, useEffect } from 'react'
import EventCalender from '@/components/EventCalender';
import Announcements from '@/components/Announcement';
import { getAssignments, updateAssignmentStatus, Assignment } from '@/utils/assignments';

const StudentPage = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    setAssignments(getAssignments());
  }, []);

  const handleMarkAsDone = (id: string) => {
    updateAssignmentStatus(id, true);
    setAssignments(getAssignments()); // Refresh assignments
  };

  const pendingAssignments = assignments.filter(a => !a.completed);
  const submittedAssignments = assignments.filter(a => a.completed);

  return (
    <div className='f-4 flex gap-4 flex-col xl:flex-row'>
      {/* left */}
       <div className='w-full xl:w-2/3'>
       <div className='h-full bg-white p-4 rounded-md'>
        <h1 className='text-xl font-semibold'>Student Dashboard of Website</h1>
        {/* Mock Assignment Submission */}
        <div className="mt-4">
          <h2 className="text-lg font-medium mb-2">Pending Assignments</h2>
          <ul className="space-y-2">
            {pendingAssignments.length === 0 ? (
              <p>No pending assignments.</p>
            ) : (
              pendingAssignments.map(assignment => (
                <li key={assignment.id} className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                  <div>
                    <span className="font-medium">{assignment.title}</span>
                    <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                    <p className="text-sm text-gray-600">{assignment.description}</p>
                  </div>
                  <button
                    onClick={() => handleMarkAsDone(assignment.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors"
                  >
                    Mark as Done
                  </button>
                </li>
              ))
            )}
          </ul>
          <h2 className="text-lg font-medium mt-6 mb-2">Submitted Assignments</h2>
          <ul className="space-y-2">
            {submittedAssignments.length === 0 ? (
              <p>No submitted assignments.</p>
            ) : (
              submittedAssignments.map(assignment => (
                <li key={assignment.id} className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                  <div>
                    <span className="font-medium">{assignment.title}</span>
                    <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                    <p className="text-sm text-gray-600">{assignment.description}</p>
                  </div>
                  <span className="text-green-600">Submitted</span>
                </li>
              ))
            )}
          </ul>
        </div>
       </div>
       </div>
       {/* Right*/}
        <div className='w-full xl:w-1/3 flex flex-col gap-8'>
    <EventCalender/>
    <Announcements/>
    </div>
    </div>
  )
}

export default StudentPage
