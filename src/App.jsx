import { createApp } from "vue";
import Message from "./vue/message.vue";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const vueApp = createApp(Message);
    vueApp.mount("#vue-app");
    return () => vueApp.unmount();
  }, []);

  return <div id="vue-app"></div>;
}

export default App;
