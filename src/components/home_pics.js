import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import pic01 from '../assets/pic01.jpg';
import pic02 from '../assets/pic02.jpg';
import pic03 from '../assets/pic03.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    root: {
        position: 'relative',
        width: 800,
        left: 100,
    },
    slide: {
        padding: 20,
        height: 500,
        color: '#fff',
    },
    slide1: {
        backgroundColor: '#f8aba6',
    },
    slide2: {
        backgroundColor: '#a3cf62',
    },
    slide3: {
        backgroundColor: '#afb4db',
    },
    pic01: {
        position: 'relative',
        width: 400,
        left: 180,
        top: 30,
    },
};

class HomePics extends Component {

    state = {
        index: 0,
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const { index } = this.state;
        return (
            <div style={styles.root}>
                <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <div style={Object.assign({}, styles.slide, styles.slide1)}>
                        <img src={pic01} alt="" style={styles.pic01} />
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide2)}>
                        <img src={pic02} alt="" style={styles.pic01} />
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide3)}>
                        <img src={pic03} alt="" style={styles.pic01} />
                    </div>
                </AutoPlaySwipeableViews>
                <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
            </div>
        );
    }
}

export default HomePics;