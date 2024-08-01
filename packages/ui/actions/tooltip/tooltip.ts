import tippy, { Props } from 'tippy.js';

/** @type {import('svelte/action').Action<HTMLElement, string>}  */

export function tooltip(node: HTMLElement, params: TooltipParams) {
  const { content, ...restParams } = params;

  const tippyInstance = tippy(node, {
    content,
    ...restParams
  });

  return {
    update(params: TooltipParams) {
      const { content, ...restParams } = params;
      tippyInstance.setProps({ content, ...restParams });
    },
    destroy() {
      tippyInstance.destroy();
    }
  };
}

export interface TooltipParams extends Partial<Props> {}
