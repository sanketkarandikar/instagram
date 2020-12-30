import React, { useState, useEffect } from 'react';
import './Home.css';
import Card from '../../Components/Cards/Card';
import Profile from '../../Components/Profile/Profile';
import RightFooter from '../../Components/RightFooter/RightFooter';
import Status from '../../Components/Status/Status';
import { db } from '../../firebase/firebase';
import UploadPost from '../../Components/UploadPost/UploadPost';

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapShot => {
            setPosts(snapShot.docs.map((doc) => ({
                id: doc.id,
                post: doc.data()
            })));
        })
    }, [posts]);
    return (
        <React.Fragment>
        <section className="home">
            <div className="home_left">
                <Status/>
                {posts.map(({id, post}) => {
                    return <Card key={id} caption={post.caption} imageUrl={post.imageUrl} username={post.username} />
                })}
            </div>
            <div className="home_right">
               <Profile/>
                <RightFooter/>
            </div>
            
        </section>
        <div className="home_uploader">
        <UploadPost/>
        </div>
        </React.Fragment>
    )
}

export default Home
