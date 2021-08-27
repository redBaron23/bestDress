import React, { useState } from 'react';
import {
    ScrollView,
    View,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import ProfileItem from "../components/ProfileItem";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import PostModel from '../components/Post/PostModel';
import PostCard from '../components/Post/PostCard';
import AuthenticatorService from '../services/AuthenticatorService';
import { useEffect } from 'react';
import UserService from '../services/UserService';
import User from '../model/User';
import PostService from '../services/PostService';

interface Props {
    username: string;
    isSelfProfile?: boolean;
}

export default function Profile(props: Props) {
    const {  username, isSelfProfile = false } = props;


    const [ user,setUser ] = useState<User>();
    const [ posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        PostService.fetchPostByUsername(username)
            .then(setPosts);
        UserService.getUser(username)
            .then(setUser);
    },[username])

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >
            <ImageBackground source={require("../assets/images/goku.jpg")} style={styles.photo}>
                <View style={styles.top}>
                    <TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {
                user && <ProfileItem user={user} />

            }

            <View style={styles.actionsProfile}>
                <TouchableOpacity style={styles.circledButton}>
                    <Ionicons name="add" size={30} color="#FFFFFF"></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity style={styles.circledButton}>
                    <AntDesign name="like1" size={24} color="#FFFFFF" />
                </TouchableOpacity>

                {isSelfProfile &&
                    <TouchableOpacity style={styles.circledButton} onPress={AuthenticatorService.signOut}>
                        <AntDesign name="logout" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                }
            </View>
            {
                posts.map(post => <PostCard key={post.id} post={post} />)
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        resizeMode: "cover",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    scrollView: { flex: 1 },
    scrollViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        paddingTop: 50,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    containerProfile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    photo: {
        width: Dimensions.get("window").width,
        height: 450,
    },
    actionsProfile: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    textButton: {
        fontSize: 15,
        color: "#FFFFFF",
        paddingLeft: 5,
    },
    circledButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#7444C0",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        elevation: 18,
    },
    roundedButton: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#5636B8",
        paddingHorizontal: 20,
    },
});