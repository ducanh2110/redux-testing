import _ from 'lodash'
export const contacts = {
    "ducanh2110": {
        name: "Duc Anh",
        email: "ducanh9595@gmail.com",
        profile_pic: "https://icon2.kisspng.com/20180615/hxf/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cafcb8559.4398361515290564318336.jpg",
        status: "Idle",
        user_id: "ducanh2110"
    },
    "duybv": {
        name: "Van Duy",
        email: "duybuihomedirect@gmail.com",
        profile_pic: "https://icon2.kisspng.com/20180615/hxf/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cafcb8559.4398361515290564318336.jpg",
        status: "Idle",
        user_id: "duybv"
    },
    "duc3dhus": {
        name: "Dong Duc",
        email: "ducdodong@gmail.com",
        profile_pic: "https://icon2.kisspng.com/20180615/hxf/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cafcb8559.4398361515290564318336.jpg",
        status: "bla blo blo",
        user_id: "duc3dhus"
    },
    "ducanh211090": {
        name: "Duc Anh",
        email: "ducanh9595@gmail.com",
        profile_pic: "https://icon2.kisspng.com/20180615/hxf/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cafcb8559.4398361515290564318336.jpg",
        status: "Idle",
        user_id: "ducanh211090"
    },
    "duybv1": {
        name: "Van Duy",
        email: "duybuihomedirect@gmail.com",
        profile_pic: "https://icon2.kisspng.com/20180615/hxf/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cafcb8559.4398361515290564318336.jpg",
        status: "Idle",
        user_id: "duybv1"
    },
    "duc3dhus1": {
        name: "Dong Duc",
        email: "ducdodong@gmail.com",
        profile_pic: "https://icon2.kisspng.com/20180615/hxf/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cafcb8559.4398361515290564318336.jpg",
        status: "bla blo blo",
        user_id: "duc3dhus1"
    },
    "ducanh211095": {
        name: "Duc Anh",
        email: "ducanh9595@gmail.com",
        profile_pic: "https://icon2.kisspng.com/20180615/hxf/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cafcb8559.4398361515290564318336.jpg",
        status: "Idle",
        user_id: "ducanh211095"
    },
    "duybv2": {
        name: "Van Duy",
        email: "duybuihomedirect@gmail.com",
        profile_pic: "https://icon2.kisspng.com/20180615/hxf/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cafcb8559.4398361515290564318336.jpg",
        status: "Idle",
        user_id: "duybv2"
    },
    "duc3dhus2": {
        name: "Dong Duc",
        email: "ducdodong@gmail.com",
        profile_pic: "https://icon2.kisspng.com/20180615/hxf/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cafcb8559.4398361515290564318336.jpg",
        status: "bla blo blo",
        user_id: "duc3dhus2"
    },
    "duc3dhus3": {
        name: "Dong Duc",
        email: "ducdodong@gmail.com",
        profile_pic: "https://icon2.kisspng.com/20180615/hxf/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cafcb8559.4398361515290564318336.jpg",
        status: "bla blo blo",
        user_id: "duc3dhus3"
    }
};

export const user = {
    email: "anh.phamduc@homedirect.com.vn",
    name: "Phạm Đức Anh",
    profile_pic: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20578531.jpg",
    status: "Online",
    user_id: "anh.phamduc"
}
const messages = {

    1: {
        is_user_msg: false,
        number: 1,
        text: "Anh Duc Dep Trai"
    },
    2: {
        is_user_msg: true,
        number: 2,
        text: "Anh Duy Dep Trai"
    },
    3: {
        is_user_msg: false,
        number: 3,
        text: "Anh Lan Dep Trai"
    },
    4: {
        is_user_msg: true,
        number: 4,
        text: "Anh Lap Dep Trai"
    },
    5: {
        is_user_msg: true,
        number: 5,
        text: "Anh Dung Dep Trai"
    },
    6: {
        is_user_msg: false,
        number: 6,
        text: "Anh Hung Dep Trai"
    },
    7: {
        is_user_msg: true,
        number: 7,
        text: "Anh Hai Dep Trai"
    },
    8: {
        is_user_msg: true,
        number: 8,
        text: "Tu Nguyen Dep Trai"
    },
    9: {
        is_user_msg: false,
        number: 9,
        text: "Dung Thanh Dep Trai"
    },
    10: {
        is_user_msg: false,
        number: 10,
        text: "Xuan Truong Dep Trai"
    }
}
export const getMessages = (quantity) => {
    return _.mapValues(contacts, function (o) {
        return (_.sampleSize((messages), quantity));
    })
}
