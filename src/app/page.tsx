import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to the School Management System</h1>
      <div className="flex space-x-4">
        <Link href="/student">
          <p className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition-colors">Go to Student Dashboard</p>
        </Link>
        <Link href="/admin">
          <p className="px-6 py-3 bg-green-500 text-white rounded-md text-lg hover:bg-green-600 transition-colors">Go to Admin Dashboard</p>
        </Link>
      </div>
    </div>
  )
}

export default Homepage