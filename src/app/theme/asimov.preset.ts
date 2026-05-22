import { definePreset } from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';
import { ASIIMOV_COLORS, ASIIMOV_GRAY, ASIIMOV_ORANGE } from './asimov-colors';

export const AsimovPreset = definePreset(Nora, {
  primitive: {
    orange: ASIIMOV_ORANGE,
    neutral: ASIIMOV_GRAY,
  },
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
    },
    colorScheme: {
      light: {
        surface: {
          0: ASIIMOV_COLORS.white,
          50: ASIIMOV_COLORS.gray,
          100: '#e8e8e8',
          200: '#dddddd',
          300: '#cccccc',
          400: '#aaaaaa',
          500: '#888888',
          600: '#666666',
          700: '#444444',
          800: '#222222',
          900: '#111111',
          950: ASIIMOV_COLORS.black,
        },
        primary: {
          color: '{primary.500}',
          contrastColor: ASIIMOV_COLORS.white,
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}',
        },
      },
      dark: {
        surface: {
          0: '#1a1a1a',
          50: '#141414',
          100: '#111111',
          200: '#0d0d0d',
          300: '#0a0a0a',
          400: '#080808',
          500: '#050505',
          600: '#030303',
          700: '#020202',
          800: '#010101',
          900: ASIIMOV_COLORS.black,
          950: ASIIMOV_COLORS.black,
        },
        primary: {
          color: '{primary.400}',
          contrastColor: ASIIMOV_COLORS.black,
          hoverColor: '{primary.300}',
          activeColor: '{primary.500}',
        },
        highlight: {
          background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
          focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
          color: '{primary.200}',
          focusColor: '{primary.100}',
        },
      },
    },
  },
});
