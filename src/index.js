import { h, app } from "hyperapp";


export const  Button = ({stys={}, val, click}) => (
  <div class={stys} onclick={e => click(e)}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flex:1,height:'100%'}}>{val}</div>
  </div>
);

