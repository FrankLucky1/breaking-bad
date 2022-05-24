import React from "react";
import CardUi from "./ui/cardUi";


const Card= ({items, loading})=>{
    return loading ?(<h1>loading...</h1>):(<section className="cards">
        {items.map((item) =>(
            <CardUi key={item.char_id} item={item}></CardUi>
         ) )}
    </section>)

}
export default Card