import React from 'react';
import AdminSideBar from './components/AdminSideBar';
// import MdHidden from './components/MdHidden';

class AdminDashboard extends React.Component {
  render() {
    return (
      <div className="h-screen flex overflow-hidden bg-gray-100 adminDash">
        {/* <MdHidden /> */}
        <AdminSideBar />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          {/* <div className="relative z-10 flex-shrink-0 flex h-16 bg-purple shadow">
            Admin Dashboard
          </div> */}

          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none pt-5 text-black" tabIndex="0">
            <div className="pt-2 pb-6 md:py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    Admin DashBoard is Coming Soon!
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;