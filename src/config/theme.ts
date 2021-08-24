import { extendTheme } from '@chakra-ui/react';
export const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontSize: ['14px', '20px'],
      },
      sizes: {
        md: {
          fontSize: ['14px', '20px'],
        },
        xs: {
          fontSize: ['10px', '14px'],
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: ['10px', '16px'],
      },
      sizes: {},
    },
  },
});
