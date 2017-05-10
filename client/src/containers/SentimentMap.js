import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import agent from '../agent';
import Leaflet from 'leaflet';

import CardContainer from '../components/card/CardContainer';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/';

const mapStateToProps = state => ({
    ...state.map
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: 'SENTIMENT_MAP_ON_LOAD', payload }),
    onLoadTweet: payload =>
        dispatch({ type: 'SENTIMENT_ON_TWEET_LOAD', payload })
});

class SentimentMap extends Component {

    constructor() {
        super();
        this.getStyle = (feature, layer) => {
            return {
                color: '#006400',
                weight: 5,
                opacity: 0.65
            }
        }

        this.getLayer = (geoJsonPoint, latlng) => {
            let fillColor = "";
            const sentiment = geoJsonPoint.properties.sentiment;
            if (sentiment === "positive") { fillColor = "#00FF00" }
            if (sentiment === "negative") { fillColor = "#FF0000" }
            if (sentiment === "neutral") { fillColor = "#000000" }

            return Leaflet.circleMarker(latlng, {
                radius: 3, fillColor: fillColor, stroke: false, fillOpacity: 1, color: fillColor
            }).on('click', (e) => {
                var popup = e.target.getPopup();
                var tweetId = e.target.feature.properties.tweet_id;
                agent.Tweet.get(tweetId).then((response) => {
                    const text = `<div><i class="fa fa-quote-left"></i> ${response.text} <i class="fa fa-quote-right"></id></div>`;
                    popup.setContent(text);
                    popup.update();
                });
            });
        }

        this.onEachFeature = (feature, layer) => {
            layer.bindPopup((e) => {
                return 'Loading...';
            });
        }
    }

    componentWillMount() {
        this.props.onLoad(Promise.all([
            agent.TweetMap.get()
        ]));
    }

    render() {
        const { mapData } = this.props;

        if (mapData) {
            const position = [-37.804994, 144.957036];
            return (
                <CardContainer backgroundColor="red"
                    title="Sentiment Analysis"
                    description="Sentiment analysis distribution across region">
                    <div className="row">
                        <div className="col-sm-10">
                            <Map center={position} zoom={10} >
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                />
                                <GeoJSON
                                    data={mapData}
                                    style={this.getStyle}
                                    pointToLayer={this.getLayer}
                                    onEachFeature={this.onEachFeature} />
                            </Map>
                        </div>
                        <div className="col-sm-2">
                            <h4>Legend</h4>
                            <p>
                                <span className="label" style={{ backgroundColor: "#00FF00" }}>Positive Sentiment</span><br />
                                <span className="label" style={{ backgroundColor: "#FF0000" }}>Negative Sentiment</span><br />
                                <span className="label" style={{ backgroundColor: "#000000" }}>Neutral Sentiment</span>
                            </p>
                        </div>
                    </div>
                </CardContainer>
            )
        } else {
            return <div>Empty</div>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SentimentMap);