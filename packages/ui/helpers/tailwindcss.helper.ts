import { extendTailwindMerge } from 'tailwind-merge';

export const cx = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': ['text-text1', 'text-text2']
    }
  }
});
