import React from 'react';
import {HTML5HistoryManager, StateNavigator} from 'navigation';
import Welcome from './Welcome';
import Books from './Books';
import Tutorials from './Tutorials';
import Book from './Book';

function createStateNavigator() {
  const stateNavigator = new StateNavigator([
    {key: 'welcome', route: '', trackTypes: false},
    {key: 'books', route: 'our-books+/{page}', defaults: {page: 1}, trackTypes: false},
    {key: 'tutorials', route: 'our-tutorials', defaults: {page: 1}, trackTypes: false},
    {key: 'book'},
  ], new HTML5HistoryManager());
  
  const {welcome, books, tutorials, book} = stateNavigator.states;
  welcome.renderView = () => <Welcome />;
  books.renderView = ({page, title}) => <Books page={page} title={title} />;
  tutorials.renderView = ({page}) => <Tutorials page={page} />;
  book.renderView = ({slug}) => <Book slug={slug} />;
  return stateNavigator;  
}

export default createStateNavigator;