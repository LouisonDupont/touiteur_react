import React from 'react';
import like from '../img/like.svg';
import close from '../img/close.svg';
import comment from '../img/comment.svg';

class Touit extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        
        return (
                <article className="touit">
                    <p className="touit_pseudo">Louloudu37</p>
                    <p className="touit_message">J'aime me beurrer la biscotte.</p>
                    <div className="touit_icone_box">
                        <button className="like">
                            <img src={like}></img>
                        </button>
                        <p className="likeNb"></p>
                        <button className="comment">
                            <img src={comment}></img>
                        </button>
                        <button className="close">
                            <img src={close}></img>
                        </button>
                    </div>
                    <div className="touit_date_box">
                        <p className="dateContent">31/05/2021</p>
                    </div>
                </article>
        )}
}

export default Touit;