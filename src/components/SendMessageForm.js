import React from 'react';

class SendMessageForm extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        
        return (
            <section className="touiteur_send">
    <div className="container">
        <form id="form">
            <div className="champ">
                <label htmlFor="pseudo">Pseudo : </label>
                <input type="text" id="pseudo" placeholder="..." />
            </div>
            <div className="champ">
                <label htmlFor="msg">Message :</label>
                <textarea id="msg" name="message" placeholder="..."></textarea>
            </div>
            <div className="champ btn">
                <input type="submit" value="Envoyer" id="buttonInput" />
            </div>
        </form>
    </div>
</section>
        )}
}

export default SendMessageForm;