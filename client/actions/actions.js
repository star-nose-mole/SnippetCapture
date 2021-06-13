import * as types from "../constants/actionTypes";


export const initUserCreator = (user, tags, snippets) =>  ({
  type: types.INIT_USER,
  payload: {user: user, tags: tags, snippets: snippets}
})


export const createNewTagCreator = (tag) => ({
  type: types.CREATE_NEW_TAG,
  payload: {tag: tag}
})


export const addTagCreator = (tag) => ({
  type: types.ADD_TAG,
  payload: {tag: tag},
})


export const updateSearchCreator = (searchString) => ({
  type: types.UPDATE_SEARCH,
  payload: {searchString: searchString},
})


export const updateSnippetsCreator = (snippets) => ({
  type: types.UPDATE_SNIPPETS,
  payload: {snippets: snippets},
})


export const updateTagsCreator = tags => ({
  type: types.UPDATE_TAGS,
  payload: {tags: tags},
})