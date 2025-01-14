import React from 'react';
import { View, Text } from 'react-native';
import { Mp3Provider} from './Mp3Context.js';
import DisplayText from './components/DisplayText/DisplayText';
import CarouselMp3 from './components/CarouselMp3/CarouselMp3.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

const App = () => {
    return (
        <Mp3Provider>
            <DisplayText/>
            <CarouselMp3/>
            <Navigation />
        </Mp3Provider>
    );
};


export default App;
