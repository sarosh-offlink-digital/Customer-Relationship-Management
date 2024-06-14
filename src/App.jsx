import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Leads from './components/Leads';
import SideNav from './components/shared_components/SideNav';
import LeadForm from './components/forms/LeadForm';
import MyDataTable from './components/dataTables/MyDataTable';
import CustomerDetail from './components/forms/CustomerDetail';
import Customers from './components/Customers';
import Users from './components/Users';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import UserProfile from './components/roles/UserProfile';
import CustomerForm from './components/forms/CustomerForm';


const App = () => {
  const [selectedId, setSelectedId] = useState(null);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        
        <Route
          path="/mydatatable"
          element={<MyDataTable setSelectedId={setSelectedId} />}
        />
        <Route path="/dashboard" element={<DashboardWithSideNav />} />
        <Route path="/customerform" element={<CustomerFormWithSideNav />} />
        <Route path="/customers" element={<CustomerWithSideNav />} />
        <Route path="/leads" element={<LeadsWithSideNav />} />
        <Route path="/projects" element={<ProjectWithSideNav />} />
        <Route path="/tasks" element={<TasksWithSideNav />} />
        <Route path="/profile" element={<UserProfileWithSideNav />} />
        <Route path="/newcustomer" element={<NewCustomerFormWithSideNav />} />
        
 
        {/* Ensure that the selectedId is passed down to the LeadForm component */}
        <Route
          path="/leadform"
          element={<LeadsFormWithSideNav selectedId={selectedId} />}
        />
      </Routes>
    </Router>
  );
};

const DashboardWithSideNav = () => <LayoutWithSideNav component={<Dashboard />} />;
const LeadsWithSideNav = () => <LayoutWithSideNav component={<Leads />} />;
const CustomerFormWithSideNav = () => <LayoutWithSideNav component={<CustomerDetail />} />;
const CustomerWithSideNav = () => <LayoutWithSideNav component={<Customers />} />;
const ProjectWithSideNav = () => <LayoutWithSideNav component={<Projects />} />;
const TasksWithSideNav = () => <LayoutWithSideNav component={<Tasks />} />;
const UserProfileWithSideNav = () => <LayoutWithSideNav component={<UserProfile />} />;
const NewCustomerFormWithSideNav = () => <LayoutWithSideNav component={<CustomerForm />} />;
// Pass the selectedId prop to the LeadForm component
const LeadsFormWithSideNav = ({ selectedId }) => (
  <LayoutWithSideNav component={<LeadForm selectedId={selectedId} />} />
);
const LayoutWithSideNav = ({ component: Component }) => (
  <div className="flex">
    <SideNav />
    <div className="flex-grow">{Component}</div>
  </div>
);

export default App;
