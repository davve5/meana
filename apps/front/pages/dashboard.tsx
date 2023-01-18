import { NextPage } from 'next';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { withSize } from 'react-sizeme';
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout';
import { DASHBOARD_COMPONENTS } from '@/components/Dashboard/componentsList';
import { deHashParams } from '@/utility/hashParams';
import useDashboard from '@/hooks/useDashboard';
import Progress from '@/components/Progress/Progress';
import NoData from '@/components/NoData/NoData';

interface DashboardProps {
  size: {
    width: number;
  };
}

const initialLayouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 1, h: 4 },
    { i: 'b', x: 1, y: 0, w: 3, h: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 4 },
    { i: 'd', x: 0, y: 4, w: 2, h: 4 },
  ],
};
const Dashboard: NextPage<DashboardProps> = ({ size: { width } }) => {
  const { components, isLoading, onLayoutChange } = useDashboard();
  return (
    <DashboardLayout>
      {isLoading && <Progress />}
      {!components && <NoData />}
      {components && (
        <ResponsiveGridLayout
          className="layout"
          layouts={initialLayouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={60}
          width={width}
          onLayoutChange={onLayoutChange}
        >
          {components?.map(({ i }) => {
            const [componentName] = deHashParams(i);
            if (DASHBOARD_COMPONENTS[componentName]) {
              const Comp = DASHBOARD_COMPONENTS[componentName];
              return (
                <div
                  key={i}
                  className="widget"
                  data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
                >
                  <Comp hash={i} />
                </div>
              );
            }
            return null;
          })}
        </ResponsiveGridLayout>
      )}
    </DashboardLayout>
  );
};

export default withSize({ refreshMode: 'debounce', refreshRate: 60 })(
  Dashboard
);
