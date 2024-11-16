import React from 'react'

const Layout = ({ sidebar, head, mainSection }) => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>{head}</header>
            <div style={styles.body}>
                <aside style={styles.sidebar}>{sidebar}</aside>
                <main style={styles.main}>{mainSection}</main>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    header: {
        backgroundColor: '#f5f5f5',
        padding: '10px',
        textAlign: 'center',
        borderBottom: '1px solid #ddd',
    },
    body: {
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
    },
    sidebar: {
        backgroundColor: '#f0f0f0',
        width: '250px',
        padding: '10px',
        borderRight: '1px solid #ddd',
        overflowY: 'auto',
    },
    main: {
        flex: 1,
        padding: '10px',
        overflowY: 'auto',
    },
};

export default Layout;