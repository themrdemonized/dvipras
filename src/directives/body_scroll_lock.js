const bodyScrollLock = require('body-scroll-lock');

export default function initBodyScrollLock(vueApp)
{
    vueApp.directive('body-scroll-lock', {
        mounted: function (_el, binding) {
            if(binding.value === undefined || binding.value)
            {
                bodyScrollLock.disableBodyScroll(_el);
            }
        },

        updated: function (_el, binding) {
            if(binding.oldValue !== binding.value)
            {
                if(binding.value === undefined || binding.value)
                {
                    bodyScrollLock.disableBodyScroll(_el);
                }
                else
                {
                    bodyScrollLock.enableBodyScroll(_el);
                }
            }
        },

        unmounted: function (_el, binding) {
            if(binding.value === undefined || binding.value)
            {
                bodyScrollLock.enableBodyScroll(_el);
            }
        }
    })
}
