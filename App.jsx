import React from 'react';
import { View, Text } from 'react-native';
import { Mp3Provider} from './Mp3Context.js';
import DisplayText from './components/DisplayText/DisplayText';
import CarouselMp3 from './components/CarouselMp3/CarouselMp3.jsx';

const App = () => {
    return (
        <Mp3Provider>
            <DisplayText/>
            <CarouselMp3/>
            
        </Mp3Provider>
    );
};


export default App;
