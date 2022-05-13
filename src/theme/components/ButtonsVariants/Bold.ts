import {grey} from "../../palette-blocks";

export const Bold = {
  props: {
    color: 'bold' as any
  },
  style: {
    color: grey['900'],
    '&:hover': {
      background: grey['800'],
      color: 'white',
    },
    '&:active': {
      background: grey['900'],
      color: 'white',
    },
  }
}
