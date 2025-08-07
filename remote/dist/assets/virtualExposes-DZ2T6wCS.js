const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Button-De48msAV.js","assets/remote__loadShare__react__loadShare__-Bh6rkMJS.js","assets/_commonjsHelpers-B85MJLTf.js","assets/remote__mf_v__runtimeInit__mf_v__-C_UNlhGT.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-BelkbqnE.js';

const exposesMap = {
    
        "./Button": async () => {
          const importModule = await __vitePreload(() => import('./Button-De48msAV.js').then(n => n.a),true?__vite__mapDeps([0,1,2,3]):void 0);
          const exportModule = {};
          Object.assign(exportModule, importModule);
          Object.defineProperty(exportModule, "__esModule", {
            value: true,
            enumerable: false
          });
          return exportModule
        }
      
  };

export { exposesMap as default };
