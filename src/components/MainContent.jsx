function MainContent(){
    return(
        <main style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <p> <span style={{ fontWeight: 'bold' }}>{props.age}</span>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;
