import React, { useEffect, useState } from "react";
import { db } from "../fbase";

const Profile = ({ profile }) => {
    const [favWriters, setFavWriters] = useState([]);
    const getProfile = async () => {
        await db.collection('fav-author')
            .where("creatorId", "==", profile.id)
            .orderBy("createdAt")
            .onSnapshot((shot) => {
                const writersdb = shot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }
                ))
                setFavWriters(writersdb)
            })
    }
    useEffect(() => {
        getProfile();
    }, [])
    favWriters.map(writer => (
        console.log(writer.favoriteAuthor)
    ))
    return (
        <div>
          <ul>
          { favWriters.map(writer => (
        <li key={writer.id}>{writer.favoriteAuthor}</li>
        ))
    }
          </ul>
        </div>
    )
}
export default Profile;