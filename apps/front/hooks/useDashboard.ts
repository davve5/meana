import { useContext } from 'react';
import { DashboardContext } from '@/contexts/dashboardContext';

const useDashboard = () => {
  const context = useContext(DashboardContext);

  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }

  return context;
};

export default useDashboard;
