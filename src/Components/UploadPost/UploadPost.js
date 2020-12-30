import React, {useState, useEffect} from 'react';
import './UploadPost.css';
import {db, auth, storage} from '../../firebase/firebase';
import { useStateValue } from '../../Store/StateProvider';

function UploadPost() {

    const [caption, setCaption] = useState("");
    const [image, setImage] = useState();
    const [loggedInUser, setLoggedInUser] = useState("");
    const [{basket, user}, dispatch] = useStateValue();
    
    useEffect(() => {
        console.log(user.user.email);
        setLoggedInUser(user.user.email);
    }, [])
    const handleFileChange = e => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }

    const handleCaption = e => {
        setCaption(e.target.value);
    }

    const handleUpload = (e) => {
        e.preventDefault();
        // const uploadTask = storage.ref(`images/${image.name}`).put(image);
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on("state_changed", (snapShot) => {

        }, err => alert(err.message),
        () => {
            storage.ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
                db.collection("posts").add({
                    username: loggedInUser,
                    imageUrl: url,
                    caption,
                    timestamp: new Date().getTime()
                })
                .then(res => console.log(res, '-----------------'))
                .catch(err => alert(err.message));
            })
        })
    }
    return (
        <div>
            <form onSubmit={handleUpload}>
                <input type="text" value={caption} onChange={(e) => handleCaption(e)} placeholder="Enter a caption..."/>
                <input type="file" onChange={handleFileChange}/>
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default UploadPost;
