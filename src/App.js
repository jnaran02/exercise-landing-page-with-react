import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row py-5">
          <div className="col-3">
            <Card
              image = 'http://picsum.photos/id/435/325/500'
              title = 'Titulo 1'
              paragraph = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam.'
            />
          </div>
          <div className="col-3">
            <Card
              image = 'http://picsum.photos/id/444/325/500'
              title = 'Titulo 2'
              paragraph = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam.'
            />
          </div>
          <div className="col-3">
            <Card
              image = 'http://picsum.photos/id/834/325/500'
              title = 'Titulo 3'
              paragraph = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam.'
            />
          </div>
          <div className="col-3">
            <Card
              image = 'http://picsum.photos/id/666/325/500'
              title = 'Titulo 4'
              paragraph = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam.'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
