import React, {Component} from 'react';
import './App.css';
import Navigation from 'dps-navigation/dist/component';

class App extends Component {
    state = {
        collapsed: false
    }

    toggleSideNav() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const wrapperClass = this.state.collapsed ? 'collapsed' : 'expanded';
        return (
            <div className="App">
                <Navigation standalone={false} urlPrefix={'/dps-demo-app'}
                            onCollapse={() => this.toggleSideNav()}
                            onExpand={() => this.toggleSideNav()}/>

                <div className={wrapperClass}>
                    <div className="App__Header">
                        <span className="App__Header__spacer"/>
                        <button>Logout</button>
                    </div>
                    <div className="App__Body">
                        <div className="App__Body__Content">
                            <div className="hwxTitle">Demo App</div>
                            <div className="hwxDescription">
                                This is a demo app.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
