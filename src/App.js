import React, {Component} from 'react';
import Header from "./components/Header";
import SendMessageForm from "./components/SendMessageForm";
import TouitContainer from "./components/TouitContainer";
import './scss/_global.scss';
import './App.scss';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Header />
          <SendMessageForm />
          <section className="main_section">
                <div className="container">
                    <div className="global_left_content">
                      <div className="like_content">
                        <h2>Most liked</h2>
                          {/* <MostLiked /> */}
                      </div>
                      <div className="author_content">
                        <h2>Best author</h2>
                        <div className="author_box">
                          {/* <BestAuthor /> */}
                        </div>
                      </div>
                      <div className="words_content">
                        <h2>Words Champions</h2>
                          <div className="words_box">
                            {/* <WordsChampions /> */}
                          </div>
                      </div>
                    </div>
                    <div className="global_right_content">
                      <h2>Last touits</h2>
                      <TouitContainer />
                    </div>
                </div>
          </section>      
        </div>
    );
    }
}
export default App;
