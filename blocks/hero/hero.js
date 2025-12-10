import { variantClassesToBEM } from '../../scripts/common.js';

const variantClasses = {
  countdown: 'countdown',
};
const blockName = 'hero';

export default function decorate(block) {
  variantClassesToBEM({
    blockClassList: block.classList,
    variantClasses,
    blockName,
  });
}
