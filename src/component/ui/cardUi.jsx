import React from "react";

const CardUi = ({item})=>{

    return(
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              <img src={item.img} alt='' />
            </div>
            <div className='card-back'>
              <h1>{item.name}</h1>
              <ul>
                <li>
                  <strong>Actor Name:</strong> {item.portrayed}
                </li>
                <li>
                  <strong>Nickname:</strong> {item.nickname}
                </li>
                <li>
                  <strong>Birthday:</strong> {item.birthday}
                </li>
                <li>
                  <strong>Status:</strong> {item.status}
                </li>
                <li>
                  <strong>Occupation:</strong> {item.occupation[0]}
                </li>
              </ul>
            </div>
          </div>
          <div className="title">
            <h2>
                {item.name}
            </h2>
          </div>
      </div>
    )
}
export default CardUi;