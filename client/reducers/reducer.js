import * as types from "../constants/actionTypes";

const initialState = {
  username: 'MATT',
  search: [],
  tags: {
    redux: 1,
  },
  snippets: []
}

// {
//   snippitID: 1,
//   snippetCode: 'for let people count',
//   URL: 'howtobeabetterperson.com',
//   tags: [
//     tagName,
//   ]
// }

const reducer = (state = initialState, action) => {
  switch (action.type){
    case types.INIT_USER:
      return{
        ...state,
        username: action.payload.user.username,
        tags: action.payload.tags,
        snippets: action.payload.snippets,
      }
    case types.ADD_TAG:
      let newTag = {};
      newTag[action.payload.tag.tagName] = action.payload.tag.tagID;
      return{
        ...state,
        tags: {...state.tags, newTag},
      }
    
    
    case types.UPDATE_SEARCH:
      const uniqueTag = {};
      action.payload.searchString.split(' ').forEach((tag) => {
        if(tag != '' && tag != ' ') uniqueTag[tag] = 1;
      })

      return {
        ...state,
        search: Object.keys(uniqueTag),
      }
   
    case types.UPDATE_SNIPPETS:
      return {
        ...state,
        snippets: action.payload.snippets,
      }
    
    case types.UPDATE_TAGS:
      return {
        ...state,
        tags: action.payload.tags,
      }
    
    default:
      return state;
  }
}

export default reducer;