
// after intial fetch, updates store for user
export const INIT_USER = 'INIT_USER';

//non existent tag gets created
export const CREATE_NEW_TAG = 'CREATE_NEW_TAG'; 

// add tag to snipet
export const ADD_TAG = 'ADD_TAG'; 

// adds all tags from search bar into the search array in state
export const UPDATE_SEARCH = 'UPDATE_SEARCH';

// replaces snippets array in state with newly fetched snippets
export const UPDATE_SNIPPETS = 'UPDATE_SNIPPET';

//updates total tags shown on page
export const UPDATE_TAGS = 'UPDATE_TAGS'

//search = redux hook react
//'redux hook react'
//push each word into search[]
//search = [];
//search.push()
// search = string.split(' ')





const state = {
  username: 'xxbobxzxz2',
  search: [],
  tags: {
    redux: 1,
    tagName: tagID,
  },
  snippets: [
    {
      snippitID: 1,
      snippetCode: 'for let people count',
      URL: 'howtobeabetterperson.com',
      tags: [
        tagName,
      ]
    }
  ]
}



