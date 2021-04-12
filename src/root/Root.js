import App from "./App";
import { Provider } from 'react-redux';
import store from '../store';

const Root = () => (
    <Provider store={store}>
        <App></App>
    </Provider>
);
export default Root;
