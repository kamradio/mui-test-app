import {palette} from '../palette';

export const MuiDivider = {
  variants: [{
    props: { light: true },
    style: {
      '&::before, &::after': {
        borderColor: palette.grey?.["200"]
      }
    }
  }, {
    props: { textAlign: "left" } as any,
    style: {
      '&::before': {
        width: '0.5rem'
      }
    }
  }]
};
