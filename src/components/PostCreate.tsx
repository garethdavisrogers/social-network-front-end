import '../app/App.css'
import type {Post} from '../types/features/Post';

export function PostCreate() {

  return (
    <>
    <form>
        <fieldset>
            <h1>Post Something</h1>
            <input type="text"></input>
            <button type="submit">Log In</button>
        </fieldset>
    </form>
    </>
  )
}

export default PostCreate
