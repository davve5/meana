import { alpha, useTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

const StyledChart: React.FC = () => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '.apexcharts-canvas': {
          '.apexcharts-xaxistooltip': {
            border: 0,
            color: theme.palette.text.primary,
            borderRadius: Number(theme.shape.borderRadius) * 1.5,
            '&:before': { borderBottomColor: 'transparent' },
            '&:after': {
              borderBottomColor: alpha(theme.palette.background.default, 0.8),
            },
          },
          '.apexcharts-tooltip.apexcharts-theme-light': {
            border: 0,
            borderRadius: Number(theme.shape.borderRadius) * 1.5,
            '.apexcharts-tooltip-title': {
              border: 0,
              textAlign: 'center',
              fontWeight: theme.typography.fontWeightBold,
              backgroundColor: alpha(theme.palette.grey[500], 0.16),
              color:
                theme.palette.text[
                  theme.palette.mode === 'light' ? 'secondary' : 'primary'
                ],
            },
          },
          '.apexcharts-legend': {
            padding: 0,
          },
          '.apexcharts-legend-series': {
            display: 'flex !important',
            alignItems: 'center',
          },
          '.apexcharts-legend-marker': {
            marginRight: 8,
          },
          '.apexcharts-legend-text': {
            lineHeight: '18px',
            textTransform: 'capitalize',
          },
        },
      }}
    />
  );
};

export default StyledChart;
