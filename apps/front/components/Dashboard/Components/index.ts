import RAM_CONFIG from '../Components/Ram';
import CPU_CONFIG from '../Components/Cpu';

export const COMPONENT_HEIGHT = 250 as const;

export type Component = {
  title: string;
  key: string;
  previewComponent: React.ElementType;
  formComponent: React.ElementType;
  component: React.ElementType;
};

export const COMPONENTS: Component[] = [RAM_CONFIG, CPU_CONFIG];
