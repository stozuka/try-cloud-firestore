import db from '../firebase';
import {
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST,
  CONNECTION_ERROR
} from './types';

export function fetchPosts() {
  return async dispatch => {
    try {
      const querySnapshot = await db.collection('people').get();
      const list = querySnapshot.docs.map(doc => doc.data());

      dispatch({
        type: FETCH_POSTS,
        payload: list
      });
    } catch (_error) {
      dispatch({ type: CONNECTION_ERROR });
    }
  };
}

export function createPost(values) {
  return async dispatch => {
    try {
      await db
        .collection('people')
        .doc(values.name)
        .set({
          name: values.name,
          email: values.email
        });

      dispatch({
        type: CREATE_POST,
        payload: values
      });
    } catch (_error) {
      dispatch({ type: CONNECTION_ERROR });
    }
  };
}

export function deletePost(name) {
  return async dispatch => {
    try {
      await db
        .collection('people')
        .doc(name)
        .delete();

      dispatch({
        type: DELETE_POST,
        payload: name
      });
    } catch (_error) {
      dispatch({ type: CONNECTION_ERROR });
    }
  };
}
