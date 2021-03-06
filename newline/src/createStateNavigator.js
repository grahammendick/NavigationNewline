import React from 'react';
import {HTML5HistoryManager, StateNavigator} from 'navigation';
import Welcome from './Welcome';
import Books from './Books';
import Tutorials from './Tutorials';
import BookLoader from './BookLoader';

function createStateNavigator() {
  const stateNavigator = new StateNavigator([
    {key: 'welcome', route: '', trackTypes: false},
    {key: 'books', route: 'our-books+/{page}', defaults: {page: 1}, trackTypes: false},
    {key: 'tutorials', route: 'our-tutorials', defaults: {page: 1}, trackTypes: false},
    {key: 'book', route: '{slug}+/{contents}', defaults: {contents: false}, trackTypes: false},
  ], new HTML5HistoryManager());
  
  const {welcome, books, tutorials, book} = stateNavigator.states;
  welcome.renderView = () => <Welcome />;
  books.renderView = ({page, title}) => <Books page={page} title={title} />;
  tutorials.renderView = ({page}) => <Tutorials page={page} />;
  book.renderView = ({slug, contents}) => <BookLoader slug={slug} contents={contents} />;

  book.urlEncode = (_, key, val) => (
    (key === 'contents' && val === 'true') ? 'contents' : encodeURIComponent(val)
  )
  book.urlDecode = (_, key, val) => (
    (key === 'contents' && val === 'contents') ? 'true' : decodeURIComponent(val)
  )
  return stateNavigator;  
}

export default createStateNavigator;