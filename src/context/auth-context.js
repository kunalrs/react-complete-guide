import React from 'react';

const authComponent = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authComponent;