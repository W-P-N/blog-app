import { createContext } from "react";
// import img from './../../../../assets/images/no-user-image.png';
// import { Image } from "react-native";

// When to ues this context?

export const UserContext = createContext({
    userName: null,
    userId: new Date() + Math.random(),
    blogsCreated: [],
    ttlNumLikes: null,
    ttlPosts: null,
    ttlNumComments: null,
    userProfileImageUri: './../../../../assets/images/no-user-image.png',
    userPhoneNumber: null,
    userEmailId: null,
    userGender: null,
    setUserName: ({userName}) => {},
    setUserProfileImageUri: ({imageUri}) => {},
    setUserEmailId: ({userMailId}) => {},
    setUserPhoneNumber: ({userPhoneNumber}) => {},
    setUserGender: ({userGender}) => {}
});

function UserContextProvider({children}) {

    function setUserName({userName}) {
        
    };
    function setUserProfileImageUri({imageUri}) {
        
    };
    function setUserEmailId({userMailId}) {};
    function setUserPhoneNumber({userPhoneNumber}) {};
    function setUserGender({userGender}) {};

    const value = {
        setUserName: setUserName,
        setUserProfileImageUri: setUserProfileImageUri,
        setUserEmailId:setUserEmailId,
        setUserPhoneNumber: setUserPhoneNumber,
        setUserGender: setUserGender
    }
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;



