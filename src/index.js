import { h, app } from "hyperapp";
import picostyle from "picostyle";
const style = picostyle(h);
const Div = style("div")(({stys:{width, height, color,bcolor,hcolor,hbcolor,radius, imgsrc}}) => ({
    width: `${width||100}px`,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: `${bcolor||'lightgrey'}`,
    cursor: 'pointer',
    height: `${height||30}px`,
    color: `${color||'black'}`,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `${radius||8}px`,
    userSelect: 'none',
    ":hover":{
      backgroundColor:`${hbcolor||"red"}`,
      color:`${hcolor||"pink"}`,
    }
    
}));
const Icon = style("img")(({src}) => ({
  //position: 'absolute',
  width:'20px',


}) )
const Text = style("div")(()=>({
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex:1
}))

export const Button = ({stys={}, val, click }) => (
  <Div stys={stys} onclick={e => click(e)}>
    <Text>{(stys && stys.imgsrc)?<Icon src={stys.imgsrc} /> : ''}{val}</Text>
    
  </Div>
);
