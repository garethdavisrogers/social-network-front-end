import { useState } from 'react';
import '../app/App.css'
import type {Post} from '../types/features/Post';

export function PostCreate() {

    const [body, setBody] = useState<string>("");
    return (
        <>
        <form>
            <fieldset>
                <div className="form-group">
                    <label>Post</label>
                    <input type="textarea" placeholder='post' value={body} onChange={(e)=>{setBody(e.target.value)}}/>
                </div>
                <button type="submit">Post</button>
            </fieldset>
        </form>
        </>
    )
}

export default PostCreate
