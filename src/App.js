import React, {Component} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from './aws-amplify-reacdt';

import {createConversation} from './src/graphql/mutation';
import {createConversation} from './src/graphql/queries';


class App extends Component {
    render() {
        return(
            <div class='app'>
                test
            </div>
        );
    }
}

export default App