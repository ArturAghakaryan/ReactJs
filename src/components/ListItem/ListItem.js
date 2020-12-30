import React from "react";



import Button from "../Button/Button";
import Image from "../Image/Image";
import "./ListItem.scss";


function ListItem(item){

    return(
        <div className="list--item">
            <div className="list--item-content">
                <div className="list--item-img">
                    <Image />
                </div>
                <div className="list--item-info">
                    <div className="list--item-title">
                        Lorem Ipsum
                    </div>
                    <div className="list--item-desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div className="list--item-action">
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ListItem;