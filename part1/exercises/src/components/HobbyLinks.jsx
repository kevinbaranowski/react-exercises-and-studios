const HobbyLinks = () => {
    const hobbyLinks = ['https://www.youtube.com', 'https://www.twitch.tv'];
    return (
        <>
            <h3>Hobby Websites</h3>
            <div>
                <a href={hobbyLinks[0]}>Youtube</a>
            </div>
            <div>
                <a href={hobbyLinks[1]}>Twitch</a>
            </div>
        </>    
    )
}

export default HobbyLinks;
