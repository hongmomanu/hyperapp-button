import { h, app } from "hyperapp";
import picostyle from "picostyle";
const style = picostyle(h);
const Div = style("div")(({stys:{width, height, color,bcolor,hcolor,hbcolor,radius}}) => ({
    width: `${width||100}px`,
    display: 'flex',
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

export const Button = ({stys, val, click }) => (
  <Div stys={stys} onclick={e => click(e)}>
    {val}
  </Div>
);
