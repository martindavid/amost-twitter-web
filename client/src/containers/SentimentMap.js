import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Circle, TileLayer, GeoJSON } from 'react-leaflet';
import agent from '../agent';
import Leaflet from 'leaflet';

import CardContainer from '../components/card/CardContainer';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/';

const mapStateToProps = state => ({
    ...state.map
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: 'SENTIMENT_MAP_ON_LOAD', payload })
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
            return Leaflet.circleMarker(latlng, { radius: 2, fillColor: "#FF0000", stroke: false, fillOpacity: 1, color: "#FF0000" });
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
                    <Map center={position} zoom={10} >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                        <GeoJSON data={mapData} style={this.getStyle} pointToLayer={this.getLayer} />
                    </Map>
                </CardContainer>
            )
        } else {
            return <div>Empty</div>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SentimentMap);