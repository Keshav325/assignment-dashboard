'use client';
import React, { useState } from 'react'
import UserCard from "@/components/UserCard";
import CountChart from '@/components/CountChart';
import AttendanceChart from '@/components/AttendanceChart';
import FinanceChart from '@/components/FinanceChart';
import EventCalender from '@/components/EventCalender';
import Announcements from '@/components/Announcement';
import { addAssignment } from '@/utils/assignments';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate || !description) {
      setMessage('Please fill in all fields.');
      return;
    }
    addAssignment({ title, dueDate, description });
    setMessage('Assignment created successfully!');
    setTitle('');
    setDueDate('');
    setDescription('');
  };

  return (
    <div className=' p-4 flex gap-4 flex-col md:flex-row'>
    {/* Left */}
    <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      {/* Assignment Generation Section */}
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Create New Assignment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="assignmentTitle" className="block text-sm font-medium text-gray-700">Assignment Title</label>
            <input
              type="text"
              id="assignmentTitle"
              name="assignmentTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="e.g., Math Homework - Chapter 3"
            />
          </div>
          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter assignment description..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Assignment
          </button>
          {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
        </form>
      </div>
      <div className='flex gap-4 justify-between flex-wrap'>
     <UserCard  type="student"/>
     <UserCard  type="teacher"/>
     <UserCard  type="parent"/>
     <UserCard  type="staff"/>
      </div>
        {/* Middle chart */}
      <div className='flex gap-4 flex-col lg:flex-row'>
       {/* Count Chart */}
       <div className='w-full lg:w-1/3 h-[450px]'> 
       <CountChart />
       </div>
       {/* Attendence chart */}
       <div className='w-full lg:w-2/3 first-line:h-[450px]'>
       <AttendanceChart />
       </div>
      </div>
      {/* Bottom chart */}
      <div className='w-full h-[500px]'>
        <FinanceChart />
      </div>
    </div>
    {/* Right*/}
    <div className='w-full lg:w-1/3 flex flex-col gap-8'>
    <EventCalender/>
    <Announcements/>
    </div>
    </div>
  )
}

export default AdminPage
