import liveauctionlike from '../../images/live auctions/Vector.png'
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import footerLogo from '../../images/footer/image.png'
import youtube from '../../images/footer/Vector.png'
import twiter from '../../images/footer/Vector (1).png'
import facebook from '../../images/footer/Vector (2).png'
import google from '../../images/footer/Vector (3).png'

// Live Auction

export const Time = styled(Typography)(({ theme }) => ({
    background:
      "linear-gradient(125.33deg, #8613A5 18.61%, rgba(250, 250, 250, 0.65) 137.4%)",
    width: "5rem",
    opacity: "0.95",
    boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.12)",
    color: "white",
    position: "absolute",
    top: "13rem",
    fontWeight: "500",
    padding: "3px 10px",
  }));



export const liveauction = [
    {
        Image: require('../../images/live auctions/image 9.png'),
        // image:{liveauctionimage1},
        time:'03:15:42',
        title:'Virtual Art',
        subtitle:'by @wzard',
        like:{liveauctionlike},
        likenumber:'92',
        bid:'Current Bid',
        bidnumber:'4.89',
        button:'PLACE A BID'
    },
    {
        Image:require('../../images/live auctions/unsplash_GfQEdpIkkuw.png'),
        time:'03:15:42',
        title:'Virtual Art',
        subtitle:'by @wzard',
        like:{liveauctionlike},
        likenumber:'92',
        bid:'Current Bid',
        bidnumber:'4.89',
        button:'PLACE A BID'
    },
    {
        Image:require( '../../images/live auctions/image 10.png'),
        time:'03:15:42',
        title:'Virtual Art',
        subtitle:'by @wzard',
        like:{liveauctionlike},
        likenumber:'92',
        bid:'Current Bid',
        bidnumber:'4.89',
        button:'PLACE A BID'
    },
    {
        Image: require('../../images/live auctions/image 9.png'),
        time:'03:15:42',
        title:'Virtual Art',
        subtitle:'by @wzard',
        like:{liveauctionlike},
        likenumber:'92',
        bid:'Current Bid',
        bidnumber:'4.89',
        button:'PLACE A BID'
    }
];

export const workprocess = [
    {
        process1:'Set Up Your Wallet',
        process2:'Create Your Collection',
        process3:'Add Your NFTs',
        process4:'List Them For Sale'
    }
];

export const collection = [
    {
        image:require('../../images/explore by categories/category1.png'),
        title:'@wzard',
        number:'92'
    },
    {
        image:require('../../images/explore by categories/category2.png'),
        title:'@wzard',
        number:'92'
    },
    {
        image:require('../../images/explore by categories/category3.png'),
        title:'@wzard',
        number:'92'
    },
    {
        image:require('../../images/explore by categories/category4.png'),
        title:'@wzard',
        number:'92'
    },
    {
        image:require('../../images/explore by categories/category1.png'),
        title:'@wzard',
        number:'92'
    },
    {
        image:require('../../images/explore by categories/category2.png'),
        title:'@wzard',
        number:'92'
    },
];


export const category = [
    {
        Image:require('../../images/explore by categories/category1.png'),
        time:'03:15:42',
        title:'Virtual Art',
        subtitle:'by @wzard',
        like:{liveauctionlike},
        likenumber:'92',
        bid:'Current Bid',
        bidnumber:'4.89',
        button:'PLACE A BID'
    },
    {
        Image:require('../../images/explore by categories/category2.png'),
        time:'03:15:42',
        title:'Virtual Art',
        subtitle:'by @wzard',
        like:{liveauctionlike},
        likenumber:'92',
        bid:'Current Bid',
        bidnumber:'4.89',
        button:'PLACE A BID'
    },
    {
        Image:require('../../images/explore by categories/category3.png'),
        time:'03:15:42',
        title:'Virtual Art',
        subtitle:'by @wzard',
        like:{liveauctionlike},
        likenumber:'92',
        bid:'Current Bid',
        bidnumber:'4.89',
        button:'PLACE A BID'
    },
    {
        Image:require('../../images/explore by categories/category4.png'),
        time:'03:15:42',
        title:'Virtual Art',
        subtitle:'by @wzard',
        like:{liveauctionlike},
        likenumber:'92',
        bid:'Current Bid',
        bidnumber:'4.89',
        button:'PLACE A BID'
    },
    {
        image:require('../../images/explore by categories/category1.png'),
        time:'03:15:42',
        title:'Virtual Art',
        subtitle:'by @wzard',
        like:{liveauctionlike},
        likenumber:'92',
        bid:'Current Bid',
        bidnumber:'4.89',
        button:'PLACE A BID'
    },
    {
        Image:require('../../images/explore by categories/category2.png'),
        time:'03:15:42',
        title:'Virtual Art',
        subtitle:'by @wzard',
        like:{liveauctionlike},
        likenumber:'92',
        bid:'Current Bid',
        bidnumber:'4.89',
        button:'PLACE A BID'
    }
];

export const topcreators =[
    {
        image:'',
        name:'Wzard Dee',
        bidnumber:'4.89',
        itemnumber:'33'
    },
    {
        image:'',
        name:'Wzard Dee',
        bidnumber:'4.89',
        itemnumber:'33'
    },
    {
        image:'',
        name:'Wzard Dee',
        bidnumber:'4.89',
        itemnumber:'33'
    },
    {
        image:'',
        name:'Wzard Dee',
        bidnumber:'4.89',
        itemnumber:'33'
    },
];

export const footer = {
        image:{footerLogo},
        secondColumnPara1first:'Nec, enim sed lacus, magna pharetra.',
        secondColumnPara1secondline:' Phasellus tincidunt nulla pharetra',
        secondColumnPara1third:' gravida est.',
        mediaImage:[
            {
                img:{youtube},
            },
            {
                img:{twiter}
            },
            {
                img:{facebook}
            },
            {
                img:{google}
            }
        ],
        secondColumnPara2:'All rights reserved@2021',
        thirdColumnInfo1:'About Us',
        thirdColumnInfo2:[
            {
                title:'About NFTs',
            },
            {
                title:'Live Auctions',
            },
            {
                title:'Nft Blog',
            },
            {
                title:'Activity',
            }
        ],
        fourthColumnInfo1:'Support',
        fourthColumnInfo2:[
            {
                title:'Help & Support',
            },
            {
                title:'Item Details',
            },
            {
                title:'Author Profile',
            },
            {
                title:'Collection',
            }
        ]
    }
