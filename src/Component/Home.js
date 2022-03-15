const Home = props => {

    let darcMode = props.theme;
    return (
        <div className={(darcMode ? 'dark-mode' : 'light-mode') + ' homeCard'}></div>
    );
}

export default Home;