import Vue from 'vue';

import CInput from '~/components/Common/CInput';
import CButton from '~/components/Common/CButton';
import CSvgIcon from '~/components/Common/CSvgIcon';
import CCircleButton from '~/components/Common/CCircleButton';

const components = {
  install(Vue) {
    Vue.component('CInput', CInput);
    Vue.component('CButton', CButton);
    Vue.component('CSvgIcon', CSvgIcon);
    Vue.component('CCircleButton', CCircleButton);
  }
};

Vue.use(components);
