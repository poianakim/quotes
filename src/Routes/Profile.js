import React, { useEffect, useState } from "react";
import UserQuotes from "../Components/UserQuotes";
import { db } from "../fbase";

const Profile = ({ profile, userObj }) => {
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
    return (
        <div>
            <h4 className="user-name">{profile.displayName}'s profile page</h4>

            <div className="box">
                <div className="profile-fav-author">
                    <div>
                        <h5 className="fav-authors">{profile.displayName}'s Favorite Writers</h5>
                        <ul>
                            {favWriters.map(writer => (
                                <li key={writer.id}>{writer.favoriteAuthor}</li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="profile-quotes">
                    <h5>{profile.displayName}'s quotes collection</h5>
                        <UserQuotes profile={profile}/>
                </div>
            </div>
        </div>
    )
}
export default Profile;