import React from 'react'
import HomeCard from './HomeCard'

export default function HomeMixer() {
    return (
        <React.Fragment>
            <div className="HomeCard__main my-4 mx-4">
                <HomeCard
                    url="/mall"
                    title="Honesty Mall"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" />
                <HomeCard
                    url="/mart" title="Honesty Mart"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg" />
                <HomeCard
                    url="/store" title="Honesty Store"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" />
                <HomeCard
                    url="/shop" title="Honesty Shop"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" />
            </div>
            <h2 className="my-3 mx-3">Categories</h2>
            <div className="HomeCard__main my-4">
                <HomeCard
                    url="" title="Clothes"
                    url="" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" />
                <HomeCard
                    url="" title="Mechanics"
                    url="" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg" />
                <HomeCard
                    url="" title="Electronics"
                    url="" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" />
                <HomeCard
                    url="" title="Computers"
                    url="" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" />
            </div>
            <div className="HomeCard__main">
                <HomeCard
                    url="" title="Clothes"
                    url="" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" />
                <HomeCard
                    url="" title="Mechanics"
                    url="" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg" />
                <HomeCard
                    url="" title="Electronics"
                    url="" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" />
                <HomeCard
                    url="" title="Computers"
                    url="" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" />
            </div>
        </React.Fragment>
    )
}
