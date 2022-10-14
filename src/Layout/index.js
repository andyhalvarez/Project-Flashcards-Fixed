import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import StudyPage from "./Study/StudyPage"
import DeckList from "./Decks/DeckList"
import Deck from "./Decks/Deck"
import CreateCard from "./Cards/CreateCard"
import NewDeck from "./Decks/CreateDeck"
import EditDeck from "./Decks/EditDeck"
import EditCard from "./Cards/EditCard"
import { Switch, Route } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <DeckList />
          </Route>
          <Route exact path='/decks/new'>
            <NewDeck />
          </Route>
          <Route exact path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>
          <Route exact path='/decks/:deckId/study'>
            <StudyPage />
          </Route>
          <Route exact path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>
          <Route exact path='/decks/:deckId/cards/new'>
            <CreateCard />
          </Route>
          <Route exact path='/decks/:deckId'>
            <Deck />
          </Route>
          <Route >
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
