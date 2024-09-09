import React from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate  } from 'react-router-dom';
import MasterLayout from '../Layout/MasterLayout';
import { Inventory, Settings } from '@mui/icons-material';
import CycleCount from '../components/Inventory Manager/CycleCount';
import TransactionHistory from '../components/Inventory Manager/TransactionHistory';
import PurchaseHistory from '../components/Inventory Manager/PurchaseHistory';
import ViewInventory from '../components/Inventory Manager/ViewInventory';
import IvMSettings from '../components/Inventory Manager/Settings';

const Routing = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/settings" />} />
        <Route path="/" element={<MasterLayout />}>
          <Route path="inventory" element={<ViewInventory />} />
          <Route path="cycle-count" element={<CycleCount/>} />
          <Route path="transaction-history" element={<TransactionHistory />} />
          <Route path="purchase-history" element={<PurchaseHistory/>} />
          <Route path="settings" element={<IvMSettings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Routing
