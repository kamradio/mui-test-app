import {grey} from '../palette-blocks';

export const MuiDivider = {
  variants: [{
    props: { light: true },
    style: {
      borderColor: grey["200"],
      '&::before, &::after': {
        borderColor: grey["200"],
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
