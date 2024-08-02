import React, { useEffect, useState } from 'react';
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
import NewProject from './components/forms/NewProject';
import ProjectForm from './components/forms/ProjectForm';
import Invoices from './components/Invoices';
import Payments from './components/Payments';
import LeadsDashboard from '../src/components/Dashboards/LeadsDashboards'
const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [leadsData, setLeadsData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingCustomers, setLoadingCustomers] = useState(true);
  const [errorCustomers, setErrorCustomers] = useState(null);

  // API CALLS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://captaindesignagency.com/LeadApi');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const updatedData = result.map(item => ({
          ...item,
          brand: response.url === 'https://captaindesignagency.com/LeadApi' ? 'Captain Design Agency' : 'Captain Book Publishing'
        }));
        setLeadsData(updatedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/customers'); 

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        const updatedData = result.map(item => ({
          ...item,
          brand: response.url === 'http://localhost:5000/customers' ? 'Captain Design Agency' : 'Captain Book Publishing'
        }));
        setCustomerData(updatedData);
        setLoadingCustomers(false);
      } catch (error) {
        setErrorCustomers(error);
        setLoadingCustomers(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/mydatatable" element={<MyDataTable setSelectedCustomer={setSelectedId} />} />
        <Route path="/dashboard" element={<DashboardWithSideNav leadsData={leadsData} customerData={customerData} />} />
        <Route path="/leadsdashboard" element={<LeadsDashboardWithSideNav leadsData={leadsData} customerData={customerData} />} />
        <Route path="/customerform" element={<CustomerFormWithSideNav customer={selectedId} />} />
        <Route path="/customers" element={<CustomerWithSideNav />} />
        <Route path="/leads" element={<LeadsWithSideNav leadsData={leadsData} />} />
        <Route path="/projects" element={<ProjectWithSideNav />} />
        <Route path="/payments" element={<PaymentsWithSideNav />} />
        <Route path="/invoices" element={<InvoicesWithSideNav />} />
        <Route path="/tasks" element={<TasksWithSideNav />}/>
        <Route path="/profile" element={<UserProfileWithSideNav />} />
        <Route path="/newcustomer" element={<NewCustomerFormWithSideNav />}/>
        <Route path="/newproject" element={<NewProjectWithSideNav />} />
        <Route path="/projectform" element={<ProjectFormWithSideNav />} />
        <Route path="/leadform" element={<LeadsFormWithSideNav selectedId={selectedId} />} />
      </Routes>
    </Router>
  );
};

const DashboardWithSideNav = ({ leadsData, customerData }) => <LayoutWithSideNav component={<Dashboard leadsData={leadsData} customerData={customerData} />} />;
const LeadsDashboardWithSideNav = ({ leadsData, customerData }) => <LayoutWithSideNav component={<LeadsDashboard leadsData={leadsData} customerData={customerData} />} />;
const LeadsWithSideNav = ({ leadsData }) => <LayoutWithSideNav component={<Leads leadsData={leadsData} />} />;
const CustomerFormWithSideNav = () => <LayoutWithSideNav component={<CustomerDetail />} />;
const CustomerWithSideNav = () => <LayoutWithSideNav component={<Customers />} />;
const ProjectWithSideNav = () => <LayoutWithSideNav component={<Projects />} />;
const TasksWithSideNav = () => <LayoutWithSideNav component={<Tasks />} />;
const UserProfileWithSideNav = () => <LayoutWithSideNav component={<UserProfile />} />;
const NewCustomerFormWithSideNav = () => <LayoutWithSideNav component={<CustomerForm />} />;
const NewProjectWithSideNav = () => <LayoutWithSideNav component={<NewProject />} />;
const ProjectFormWithSideNav = () => <LayoutWithSideNav component={<ProjectForm />} />;
const LeadsFormWithSideNav = () => <LayoutWithSideNav component={<LeadForm />} />;
const PaymentsWithSideNav = () => <LayoutWithSideNav component={<Payments />} />;
const InvoicesWithSideNav = () => <LayoutWithSideNav component={<Invoices />} />;

const LayoutWithSideNav = ({ component: Component }) => (
  <div className="flex">
    <SideNav />
    <div className="flex-grow">{Component}</div>
  </div>
);

export default App;
